<?php

namespace Debb\ManagementBundle\Form;

use Debb\ManagementBundle\DataTransformer\DecimalTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

/**
 * Class HiddenDecimalType
 * @package Debb\ManagementBundle\Form
 * @author Patrick Bußmann <patrick.bussmann@christmann.info>
 */
class HiddenDecimalType extends AbstractType
{
	/**
	 * {@inheritdoc}
	 */
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder->addViewTransformer(new DecimalTransformer());
	}

	/**
	 * {@inheritdoc}
	 */
	public function getName()
	{
		return 'hidden_decimal';
	}

	/**
	 * {@inheritdoc}
	 */
	public function getParent()
	{
		return 'hidden';
	}
}
