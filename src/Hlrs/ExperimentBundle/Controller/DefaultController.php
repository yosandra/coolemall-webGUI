<?php

namespace Hlrs\ExperimentBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('ExperimentBundle:Default:index.html.twig', array('name' => $name));
    }
}
