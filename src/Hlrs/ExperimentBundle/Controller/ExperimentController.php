<?php

namespace Hlrs\ExperimentBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Hlrs\ExperimentBundle\Entity\Experiment;
use Hlrs\ExperimentBundle\Form\ExperimentTrialsType;


/**
 * Experiment controller.
 *
 * @Route("/experiment")
 */
class ExperimentController extends Controller
{

    /**
     * Lists all Experiment entities.
     *
     * @Route("/", name="experiment")
     * @Method("GET")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $entities = $em->getRepository('ExperimentBundle:Experiment')->findAll();

        return array(
            'entities' => $entities,
        );
    }
    
     /**
     * Creates a new Experiment entity.
     *
     * @Route("/new", name="experiment_create")
     * @Template("ExperimentBundle:Experiment:new.html.twig")
     */
    public function createAction(Request $request)
    {
        $entity = new Experiment();

        $form = $this->createForm(new ExperimentTrialsType(), $entity);
        
        if ($request->isMethod("POST")) {
            $form->bind($request);

            if ($form->isValid()) {
                $em = $this->getDoctrine()->getManager();
		//get the credentials of the user
                $user = $this->get('security.context')->getToken()->getUser();
                $entity->setUser($user);

                $em->persist($entity);
                $em->flush();
                
                $flashBag = $this->get('session')->getFlashBag();                
                $flashBag->add('hlrs_success', sprintf('Experiment created. Experiment: %s',$entity->getExperimentID()));
                if (0 !== count($entity->getTrials())) {
                    $flashBag->add('hlrs_success', 'Trials:');
                    foreach ($entity->getTrials() as $trial) {
                        $flashBag->add('hlrs_success', sprintf('&nbsp;&nbsp;%s (%s)', $trial->getTrialName(), $trial->getId()));
                    }
                } 
                return $this->redirect($this->generateUrl('experiment'));
            }
        }

        return array(
            'entity' => $entity,
            'form' => $form->createView()
        );
    }    

    /**
     * Finds and displays a Experiment entity.
     *
     * @Route("/{id}", name="experiment_show")
     * @Method("GET")
     * @Template()
     */
    public function showAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('ExperimentBundle:Experiment')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Experiment entity.');
        }

        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity'      => $entity,
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
    * @Route("/{id}/edit", name="experiment_edit")
    * @ParamConverter("experiment", class="ExperimentBundle:Experiment")
    * @Template()
    */
    public function editAction(Experiment $experiment, Request $request)
    {
        $originalTrials = array();

        // Create an array of the current Trial objects in the database
        foreach ($experiment->getTrials() as $trial) {
            $originalTrials[] = $trial;
        }
        
        $form = $this->createForm(new ExperimentTrialsType(), $experiment);

        if ($request->isMethod("POST")) {
            $form->bind($request);

            if ($form->isValid()) {
                $em = $this->getDoctrine()->getManager();

                // filter $originalTrials to contain experiments no longer present
                foreach ($experiment->getTrials() as $trial) {
                    foreach ($originalTrials as $key => $toDel) {
                        if ($toDel->getId() === $trial->getId()) {
                            unset($originalTrials[$key]);
                        }
                    }
                }

                // remove the relationship between the trials and the experiment
                foreach ($originalTrials as $trial) {
                    // remove the Trial from the Experiment
                    $experiment->getTrials()->removeElement($trial);

                    // if you wanted to delete the Trial entirely, you can also do that
                    $em->remove($trial);
                }

                $em->persist($experiment);
                $em->flush();

                $flashBag = $this->get('session')->getFlashBag();                
                $flashBag->add('hlrs_success', sprintf('Experiment Edited. ExperimentID: %s', $experiment->getExperimentID()));
                if (0 !== count($experiment->getTrials())) {
                    $flashBag->add('hlrs_success', 'Trials:');
                    foreach ($experiment->getTrials() as $trial) {
                        $flashBag->add('hlrs_success', sprintf('&nbsp;&nbsp;%s (%s)', $trial->getTrialName(), $trial->getId()));
                    }
                }

                return $this->redirect($this->generateUrl('experiment'));
            }
        }

        return array(
            'form' => $form->createView(),
            'experiment' => $experiment,
        );
    }

   
    /**
     * Deletes a Experiment entity.
     *
     * @Route("/{id}", name="experiment_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, $id)
    {
        $form = $this->createDeleteForm($id);
        $form->bind($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $entity = $em->getRepository('ExperimentBundle:Experiment')->find($id);

            if (!$entity) {
                throw $this->createNotFoundException('Unable to find Experiment entity.');
            }

            $em->remove($entity);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('experiment'));
    }

    /**
     * Creates a form to delete a Experiment entity by id.
     *
     * @param mixed $id The entity id
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($id)
    {
        return $this->createFormBuilder(array('id' => $id))
            ->add('id', 'hidden')
            ->getForm()
        ;
    }
}
