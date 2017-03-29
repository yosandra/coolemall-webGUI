<?php

namespace Hlrs\ExperimentBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Hlrs\ExperimentBundle\Entity\Trial;
use Hlrs\ExperimentBundle\Form\TrialType;

/**
 * Trial controller.
 *
 * @Route("/trial")
 */
class TrialController extends Controller
{

    /**
     * Lists all Trial entities.
     *
     * @Route("/", name="trial")
     * @Method("GET")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $entities = $em->getRepository('ExperimentBundle:Trial')->findAll();

        return array(
            'entities' => $entities,
        );
    }
    /**
     * Lists all trials of a particular Experiment .
     *
     * @Route("/{id_experiment}/trials", name="trials")
     * @Method("GET")
     * @Template("ExperimentBundle:Trial:index.html.twig")
     */
    public function trialsAction($id_experiment)
    {
        $em = $this->getDoctrine()->getManager();

        $entities = $em->getRepository('ExperimentBundle:Trial')->findByExperiment($id_experiment);

        return array(
            'entities' => $entities,
        );
    }
    /**
     * Creates a new Trial entity.
     *
     * @Route("/", name="trial_create")
     * @Method("POST")
     * @Template("ExperimentBundle:Trial:new.html.twig")
     */
    public function createAction(Request $request)
    {
        $entity  = new Trial();
        $form = $this->createForm(new TrialType(), $entity);
        $form->bind($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('trial_show', array('id' => $entity->getId())));
        }

        return array(
            'entity' => $entity,
            'form'   => $form->createView(),
        );
    }

    /**
     * Displays a form to create a new Trial entity.
     *
     * @Route("/new", name="trial_new")
     * @Method("GET")
     * @Template()
     */
    public function newAction()
    {
        $entity = new Trial();
        $form   = $this->createForm(new TrialType(), $entity);

        return array(
            'entity' => $entity,
            'form'   => $form->createView(),
        );
    }

    /**
     * Finds and displays a Trial entity.
     *
     * @Route("/{id}", name="trial_show")
     * @Method("GET")
     * @Template()
     */
    public function showAction($id)
    { 
        $em = $this->getDoctrine()->getManager();
        $entity = $em->getRepository('ExperimentBundle:Trial')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Trial entity.');
        }

        $deleteForm = $this->createDeleteForm($id);        

        return array(
            'entity'      => $entity,
            'delete_form' => $deleteForm->createView(),            
        );
    }
    
    /**
     * Sending all the parameters to the session .
     *
     * @Route("/{id}/context", name="trial_set_context")
     * @Method("GET")
     * @Template()
     */
    public function contextAction($id)
    {
        $session = $this->getRequest()->getSession();
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('ExperimentBundle:Trial')->find($id);
                
        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Trial entity.');
        }
        
        $globalVariables = array('id'=>$entity->getId(),
                                'trial_name'=>$entity->getTrialName(),
                                'experiment_id'=>$entity->getExperiment()->getId(),
				'experiment_name'=>$entity->getExperiment()->getExperimentID(),
                                'experiment_type'=>$entity->getExperiment()->getType(),
                                'timestamp_start'=>$entity->getTimestampStart(),
                                'timestamp_selected'=>$entity->getTimestampSelected(),            
                                'timestamp_end'=>$entity->getTimestampEnd(),
                                'debb_level'=>$entity->getDebbLevel(),
                                'debb_url'=>$entity->getDebbUrl(),    
                                'application_profile_url'=>$entity->getApplicationProfileUrl(),
                                'workload_profile_url'=>$entity->getWorkloadProfileUrl(),
                                'path_plmxml'=>$entity->getPathPlmxml(),
                                'path_wrl'=>$entity->getPathWrl(),
                                'path_stl'=>$entity->getPathStl(),
                                'object_path'=>$entity->getObjectPath(),
				'alpha'=>$entity->getAlpha(),
                                'testbed_instance'=>$entity->getTestbedInstance(),
                                'baseline_temperature'=>$entity->getBaselineTemperature(),
                                'ambient_temperature'=>$entity->getAmbientTemperature(),                                
                                'datacenter_massflow'=>$entity->getDatacenterMassflow()                                
                );  
        
        $session->set('context', $globalVariables);                        
        $flashBag = $this->get('session')->getFlashBag();
        $flashBag->add('hlrs_success', 'the Trial information has been saved in the session on the variable: context.'); 
        
            
        return array(
            'entity'      => $entity,            
        );
    }
    
    /**
     * Displays a form to edit an existing Session entity.
     *
     * @Route("/{flag}/session", defaults={"flag"=0}, name="session_edit")     
     * @Template("ExperimentBundle:Trial:edit_session.html.twig")
     */
    public function editSessionAction(Request $request, $flag = 0)
    {        
        $session = $this->getRequest()->getSession();
        $tmp_session = $session->get('context');  
        $flashBag = $this->get('session')->getFlashBag();
        
        if ($tmp_session == ''){
            $flashBag->add('hlrs_error', 'There is no Trial on Session. Please select a Trial on the option set context');
            $referrer = $request->headers->get('referer');
            return new RedirectResponse($referrer);            
        }
        
        if ($flag == 1){
            $em = $this->getDoctrine()->getManager();
            $entity = $em->getRepository('ExperimentBundle:Trial')->find($tmp_session['id']);                    
        }else{                    
            $entity = new Trial();
        }
        
        $entity->setTrialName($tmp_session['trial_name']);
        //$entity->setExperiment()->getId($tmp_session['experiment_id']);
        $entity->setTimestampStart($tmp_session['timestamp_start']);
        $entity->setTimestampSelected($tmp_session['timestamp_selected']);
        $entity->setTimestampEnd($tmp_session['timestamp_end']);
        $entity->setDebbLevel($tmp_session['debb_level']);
        $entity->setDebbUrl($tmp_session['debb_url']);    
        $entity->setApplicationProfileUrl($tmp_session['application_profile_url']);
        $entity->setWorkloadProfileUrl($tmp_session['workload_profile_url']);
        $entity->setPathPlmxml($tmp_session['path_plmxml']);
        $entity->setPathWrl($tmp_session['path_wrl']);
        $entity->setPathStl($tmp_session['path_stl']);
        $entity->setObjectPath($tmp_session['object_path']);
	$entity->setAlpha($tmp_session['alpha']);
        $entity->setTestbedInstance($tmp_session['testbed_instance']);
        $entity->setBaselineTemperature($tmp_session['baseline_temperature']);
        $entity->setAmbientTemperature($tmp_session['ambient_temperature']);        
        $entity->setDatacenterMassflow($tmp_session['datacenter_massflow']);
                
        $editForm = $this->createForm(new TrialType($flag), $entity);        
        
        if ($request->isMethod("POST")) {            
            $editForm->bind($request);
            if ($editForm->isValid()) {                
                //Save on DB
                if ($flag=='1'){
                    $em->persist($entity);
                    $em->flush();                
                    $flashBag->add('hlrs_success', 'Trial Edited on DB');
                }else{
                    $globalVariables = array('id'=>$tmp_session['id'],                                
                                'trial_name'=>$editForm["trialName"]->getData(),
                                'experiment_id'=>$tmp_session['experiment_id'],
                                'timestamp_start'=>$editForm["timestampStart"]->getData(),
                                'timestamp_selected'=>$editForm["timestampSelected"]->getData(),
                                'timestamp_end'=>$editForm["timestampEnd"]->getData(),
                                'debb_level'=>$editForm["debbLevel"]->getData(),
                                'debb_url'=>$editForm["debbUrl"]->getData(),    
                                'application_profile_url'=>$editForm["applicationProfileUrl"]->getData(),
                                'workload_profile_url'=>$editForm["workloadProfileUrl"]->getData(),
                                'path_plmxml'=>$editForm["pathPlmxml"]->getData(),
                                'path_wrl'=>$editForm["pathWrl"]->getData(),
                                'path_stl'=>$editForm["pathStl"]->getData(),
                                'object_path'=>$editForm["objectPath"]->getData(),
				'alpha'=>$editForm["alpha"]->getData(),
                                'testbed_instance'=>$editForm["testbedInstance"]->getData(),
                                'baseline_temperature'=>$editForm["baselineTemperature"]->getData(),
                                'ambient_temperature'=>$editForm["ambientTemperature"]->getData(),                                
                                'datacenter_massflow'=>$editForm["datacenterMassflow"]->getData()                                
                    );                                 
                    $session->set('context', $globalVariables);
                    $flashBag->add('hlrs_success', 'Trial Edited on Session');
                }                                
                return $this->redirect($this->generateUrl('trials', array('id_experiment' => $tmp_session['experiment_id']) ));                
            }
        }      
        
        return array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),            
            'flag'        => $flag,
        );
    }

    /**
     * Displays a form to edit an existing Trial entity.
     *
     * @Route("/{id}/edit", name="trial_edit")     
     * @Template()
     */
    public function editAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $entity = $em->getRepository('ExperimentBundle:Trial')->find($id);        

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Trial entity.');
        }
        
        $flashBag = $this->get('session')->getFlashBag();
        
        $session = $this->getRequest()->getSession();
        if ($request->isMethod("GET")) {
            $referrer = $request->headers->get('referer');
            //$flashBag->add('hlrs_success', sprintf('Referer: %s', $referrer));            
            $session->set('referrer', $referrer);  
        }
        
        
        $deleteForm = $this->createDeleteForm($id);    
        $editForm = $this->createForm(new TrialType(), $entity);
        
        if ($request->isMethod("POST")) {
            $editForm->bind($request);

            if ($editForm->isValid()) {
                $em->persist($entity);
                $em->flush();
                                
                $flashBag->add('hlrs_success', sprintf('Trial Edited. Trial Name: %s', $entity->getTrialName()));
                $referrer = $session->get('referrer'); 
                if ($referrer != ''){
                    return new RedirectResponse($referrer); 
                }else{
                    return $this->redirect($this->generateUrl('trial'));                
                }
            }
        }

        return array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),                        
        );
    }
   
    /**
     * Deletes a Trial entity.
     *
     * @Route("/{id}", name="trial_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, $id)
    {
        $form = $this->createDeleteForm($id);
        $form->bind($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $entity = $em->getRepository('ExperimentBundle:Trial')->find($id);

            if (!$entity) {
                throw $this->createNotFoundException('Unable to find Trial entity.');
            }

            $em->remove($entity);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('trial'));
    }

    /**
     * Creates a form to delete a Trial entity by id.
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
