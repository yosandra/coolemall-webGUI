<?php

namespace CoolEmAll\UserBundle\Form;

use Symfony\Component\Form\FormBuilderInterface;
use FOS\UserBundle\Form\Type\ProfileFormType as BaseType;

class ProfileFormType extends BaseType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        parent::buildForm($builder, $options);

        // add your custom field
        $builder->add('hostCovise', 'text', array('label' => 'Covise Server:'));
        $builder->add('portCovise', 'text', array('label' => 'Covise Port:'));
    }

    public function getName()
    {
        return 'coolemall_user_profile';
    }
}
