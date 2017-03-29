<?php

namespace Hlrs\ExperimentBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Hlrs\ExperimentBundle\Entity\Trial;

class ExperimentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('experimentID')
            ->add('description')            
            ->add('type', 'choice', array('choices' => array('DCWorms','CDF','Both'), 'required' => false,
				'empty_value' => false, 'attr' => array('style' => 'width: 120px;')))  
            ->add('timestampStart')
            ->add('timestampEnd')
            ->add('trials', 'collection', array(
                'type'          => new TrialType(), 
                'label'         => 'Trials',
                'by_reference'  => false,
                'prototype'     => new Trial(),
                'allow_delete'  => true,
                'allow_add'     => true,
                'required'      => false,
                'attr'          => array('class' => 'row trials')
                ))
            
        ;
    }

    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Hlrs\ExperimentBundle\Entity\Experiment'
        ));
    }

    public function getName()
    {
        //return 'hlrs_experimentbundle_experimenttype';
        return 'experiment';
    }
}
