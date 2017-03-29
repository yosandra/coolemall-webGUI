<?php

namespace Hlrs\AdministrationBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class DefaultController extends Controller
{
    /**
     * @Route("/administration/", name="homepage_gui")
     * @Template()
     */    
    public function indexAction()
    {
        return $this->render('AdministrationBundle:Default:index.html.twig');
    }
    
}
