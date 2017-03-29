<?php

namespace Hlrs\CoviseBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
//use Symfony\Component\HttpFoundation\RedirectResponse; 

/**
 * Default controller.
 *
 * @Route("/covise")
 */
class DefaultController extends Controller
{
    /**
     * @Route("/recs", name="covise_simulation")
     * @Template("CoviseBundle:Default:index.html.twig")
     */
    public function simulationAction()
    {
        //return array();
	//return new RedirectResponse('http://141.58.8.5:31221/coolEmAll.html');
	//$Port=$this->get('security.context')->getToken()->getUser()->getPortCovise();
        $Port = $this->getUser()->getPortCovise();
        if ($Port == 0){
            $Port = 31221;
        }
        $Host = $this->getUser()->getHostCovise();
        if ($Host == ''){
            $Host = 'http://141.58.8.5';
        }
        $session = $this->getRequest()->getSession();
        $tmp_session = $session->get('context');  
        $flashBag = $this->get('session')->getFlashBag();
        
        if ($tmp_session == ''){
            $flashBag->add('hlrs_error', 'There is no Trial on Session. ');            
        }else{                                
            $this->saveId($tmp_session['id'], $Port);
        }        

        return $this->render('CoviseBundle:Default:index.html.twig', array('CovisePort' => $Port,'CoviseHost' => $Host));
    }
    
    /**
	 * Get a user from the Security Context
	 *
	 * @return mixed
	 *
	 * @throws \LogicException If SecurityBundle is not available
	 *
	 * @see Symfony\Component\Security\Core\Authentication\Token\TokenInterface::getUser()
	 */
	public function getUser()
	{
		if (!$this->container->has('security.context')) {
			throw new \LogicException('The SecurityBundle is not registered in your application.');
		}

		if (null === $token = $this->container->get('security.context')->getToken()) {
			return null;
		}

		if (!is_object($user = $token->getUser())) {
			return null;
		}

		return $user;
	}

        public function saveId ($trial_id, $port_covise)
        {
            $em = $this->getDoctrine()->getEntityManager();
            $connection = $em->getConnection();
            $sql="INSERT INTO context_covise (port_covise,trial_id) VALUES ('".$port_covise."', '".$trial_id."')
                   ON DUPLICATE KEY UPDATE trial_id='".$trial_id."'";
            $statement = $connection->prepare($sql);
            $statement->execute();
            
        }
    
}
