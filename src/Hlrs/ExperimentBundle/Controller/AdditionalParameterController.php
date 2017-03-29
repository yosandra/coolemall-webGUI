<?php

namespace Hlrs\ExperimentBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Hlrs\ExperimentBundle\Entity\AdditionalParameter;
use Hlrs\ExperimentBundle\Form\AdditionalParameterType;

/**
 * AdditionalParameter controller.
 *
 * @Route("/additionalparameter")
 */
class AdditionalParameterController extends Controller
{

    /**
     * Lists all AdditionalParameter entities.
     *
     * @Route("/", name="additionalparameter")
     * @Method("GET")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $entities = $em->getRepository('ExperimentBundle:AdditionalParameter')->findAll();

        return array(
            'entities' => $entities,
        );
    }
    /**
     * Creates a new AdditionalParameter entity.
     *
     * @Route("/", name="additionalparameter_create")
     * @Method("POST")
     * @Template("ExperimentBundle:AdditionalParameter:new.html.twig")
     */
    public function createAction(Request $request)
    {
        $entity  = new AdditionalParameter();
        $form = $this->createForm(new AdditionalParameterType(), $entity);
        $form->bind($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('additionalparameter_show', array('id' => $entity->getId())));
        }

        return array(
            'entity' => $entity,
            'form'   => $form->createView(),
        );
    }

    /**
     * Displays a form to create a new AdditionalParameter entity.
     *
     * @Route("/new", name="additionalparameter_new")
     * @Method("GET")
     * @Template()
     */
    public function newAction()
    {
        $entity = new AdditionalParameter();
        $form   = $this->createForm(new AdditionalParameterType(), $entity);

        return array(
            'entity' => $entity,
            'form'   => $form->createView(),
        );
    }

    /**
     * Finds and displays a AdditionalParameter entity.
     *
     * @Route("/{id}", name="additionalparameter_show")
     * @Method("GET")
     * @Template()
     */
    public function showAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('ExperimentBundle:AdditionalParameter')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find AdditionalParameter entity.');
        }

        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity'      => $entity,
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Displays a form to edit an existing AdditionalParameter entity.
     *
     * @Route("/{id}/edit", name="additionalparameter_edit")
     * @Method("GET")
     * @Template()
     */
    public function editAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('ExperimentBundle:AdditionalParameter')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find AdditionalParameter entity.');
        }

        $editForm = $this->createForm(new AdditionalParameterType(), $entity);
        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Edits an existing AdditionalParameter entity.
     *
     * @Route("/{id}", name="additionalparameter_update")
     * @Method("PUT")
     * @Template("ExperimentBundle:AdditionalParameter:edit.html.twig")
     */
    public function updateAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('ExperimentBundle:AdditionalParameter')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find AdditionalParameter entity.');
        }

        $deleteForm = $this->createDeleteForm($id);
        $editForm = $this->createForm(new AdditionalParameterType(), $entity);
        $editForm->bind($request);

        if ($editForm->isValid()) {
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('additionalparameter_edit', array('id' => $id)));
        }

        return array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }
    /**
     * Deletes a AdditionalParameter entity.
     *
     * @Route("/{id}", name="additionalparameter_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, $id)
    {
        $form = $this->createDeleteForm($id);
        $form->bind($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $entity = $em->getRepository('ExperimentBundle:AdditionalParameter')->find($id);

            if (!$entity) {
                throw $this->createNotFoundException('Unable to find AdditionalParameter entity.');
            }

            $em->remove($entity);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('additionalparameter'));
    }

    /**
     * Creates a form to delete a AdditionalParameter entity by id.
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
