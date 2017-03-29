<?php

namespace Hlrs\ExperimentBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class AdditionalParameterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('value')
            ->add('unidadMedida')
            ->add('trial')
        ;
    }

    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'Hlrs\ExperimentBundle\Entity\AdditionalParameter'
        ));
    }

    public function getName()
    {
        return 'hlrs_experimentbundle_additionalparametertype';
    }
}
