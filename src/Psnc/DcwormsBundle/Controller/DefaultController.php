<?php


namespace Psnc\DcwormsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route; /* PG */
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template; /* PG */


class DefaultController extends Controller
{
    /**
     * @Route("/dcworms/index", name="dcworms_gui")
     * @Template()
     */
    public function indexAction()
    {
	$session = $this->getRequest()->getSession();

        $tmp_session = $session->get('context');

        $TrialName=$tmp_session['trial_name'];
        $TrialId=$tmp_session['id'];
        $Experiment=$tmp_session['experiment_id'];
        return $this->render('PsncDcwormsBundle:Default:index.html.twig', array('expid' => $Experiment, 'trialid' => $TrialId, 'trial' => $TrialName));
    }

}
