<?php

namespace Hlrs\ExperimentBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Hlrs\ExperimentBundle\Entity\Trial;

class ExperimentTrialsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('experimentID',null,array('label'=>'Experiment ID:')) 
            ->add('description',null,array('label'=>'Description:'))
            ->add('type', 'choice', array('label'=>'Type:','choices' => array('DCWorms','CFD','Testbed','All'), 'required' => false,
				'empty_value' => false, 'attr' => array('style' => 'width: 120px;')))      
            ->add('timestampStart',null,array('label'=>'Start: ',
                    'with_seconds' => true))                
            ->add('timestampEnd',null,array('label'=>'End:  ',
                    'with_seconds' => true))    
            ->add('trials', 'collection', array(
                'type'          => new TrialType(), 
                'label'         => 'Trials:',
                'by_reference'  => false,
                'prototype'     => new Trial(),
                'allow_delete'  => true,
                'allow_add'     => true,
                'attr'          => array(
                    'class' => 'row trials')
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
        return 'experiment_trials';
    }
}
