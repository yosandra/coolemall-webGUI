<?php

namespace Hlrs\ExperimentBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class TrialType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('trialName',null,array('label'=>'Trial Name:'))
            //->add('timestampStart')
            //->add('timestampEnd')
            ->add('timestampStart', 'datetime' ,array(
                    'date_widget'=> 'single_text','label' =>'Timestamp Start (d/m/y h:m:s):',
                    'date_format'=>'d/M/y','time_widget' => 'single_text',
                    'with_seconds' => true))
            ->add('timestampSelected', 'datetime' ,array(
                    'date_widget'=> 'single_text','label' =>'Timestamp Selected (d/m/y h:m:s):',
                    'date_format'=>'d/M/y','time_widget' => 'single_text',
                    'with_seconds' => true))
            ->add('timestampEnd', 'datetime' ,array(
                    'date_widget'=> 'single_text','label' =>'Timestamp End (d/m/y h:m:s):',
                    'date_format'=>'d/M/y','time_widget' => 'single_text',
                    'with_seconds' => true))
            ->add('debbLevel',null,array('label'=>'DEBB Level:'))
            ->add('debbUrl',null,array('label'=>'DEBB URL:'))
            ->add('applicationProfileUrl',null,array('label'=>'Application Profile URL:'))
            ->add('workloadProfileUrl',null,array('label'=>'Workload Profile URL:'))
            ->add('pathPlmxml',null,array('label'=>'Path PLMXML:'))
            ->add('pathWrl',null,array('label'=>'Path WRL:'))
            ->add('pathStl',null,array('label'=>'Path STL:'))
 	    ->add('objectPath',null,array('label'=>'Object Path:'))
            ->add('testbedInstance',null,array('label'=>'Testbed Instance:'))
            ->add('alpha',null,array('label'=>'Alpha:'))
            ->add('baselineTemperature',null,array('label'=>'Baseline Temperature:'))
            ->add('ambientTemperature',null,array('label'=>'Ambient Temperature:'))            
            ->add('datacenterMassflow',null,array('label'=>'Datacenter Massflow:'))                     
            //->add('experiment')
        ;
    }
    
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Hlrs\ExperimentBundle\Entity\Trial'
        ));
    }

    public function getName()
    {
        //return 'hlrs_experimentbundle_trialtype';
        return 'trial';
    }

}
