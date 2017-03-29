<?php

namespace Debb\ConfigBundle\Menu;

use Knp\Menu\FactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Translation\Translator;

/**
 * Class MenuBuilder
 * @package Debb\ConfigBundle\Menu
 * @author Patrick Bußmann <patrick.bussmann@christmann.info>
 */
class MenuBuilder
{
    /**
     * @var \Knp\Menu\FactoryInterface
     */
    private $factory;

    /**
     * @var \Symfony\Bundle\FrameworkBundle\Translation\Translator
     */
    private $translator;

	/**
	 * Our menu builder with translator and factoryinterface
	 * 
	 * @param \Knp\Menu\FactoryInterface $factory
	 * @param \Symfony\Bundle\FrameworkBundle\Translation\Translator $translator
	 */
	public function __construct(FactoryInterface $factory, Translator $translator)
	{
		$this->factory = $factory;
		$this->translator = $translator;
	}

	/**
	 * Creates the main menu (left side)
	 * 
	 * @param \Symfony\Component\HttpFoundation\Request $request
	 * @return type
	 */
	public function createMainMenu(Request $request)
	{
		$menu = $this->factory->createItem('root');

		$management = $menu->addChild($this->translateIt('Components'), array(
			'uri' => '#',
			'displayChildren' => true,
			'linkAttributes' => array('onclick' => '$(this).next().toggle(); return false;'),
			'attributes' => array('class' => 'zero first current')
		));
		$management->addChild($this->translateIt('debb_management.baseboard.plural', array(), 'crud'), array('route' => 'debb_management_baseboard_index'));
		$management->addChild($this->translateIt('debb_management.memory.plural', array(), 'crud'), array('route' => 'debb_management_memory_index'));
		$management->addChild($this->translateIt('debb_management.processor.plural', array(), 'crud'), array('route' => 'debb_management_processor_index'));
		$management->addChild($this->translateIt('debb_management.heatsink.plural', array(), 'crud'), array('route' => 'debb_management_heatsink_index'));
		$management->addChild($this->translateIt('debb_management.coolingdevice.plural', array(), 'crud'), array('route' => 'debb_management_coolingdevice_index'));
		$management->addChild($this->translateIt('debb_management.powersupply.plural', array(), 'crud'), array('route' => 'debb_management_powersupply_index'));
		$management->addChild($this->translateIt('debb_management.network.plural', array(), 'crud'), array('route' => 'debb_management_network_index'));
		$management->addChild($this->translateIt('debb_management.chassis.plural', array(), 'crud'), array('route' => 'debb_management_chassis_index'));
		$management->addChild($this->translateIt('debb_management.sensor.plural', array(), 'crud'), array('route' => 'debb_management_sensor_index'));
		$management->addChild($this->translateIt('debb_management.flowprofile.plural', array(), 'crud'), array('route' => 'debb_management_flowprofile_index'));
		$management->addChild($this->translateIt('debb_management.flowpump.plural', array(), 'crud'), array('route' => 'debb_management_flowpump_index'));

		$menu->addChild($this->translateIt('debb_config.node.plural', array(), 'crud'), array(
			'route' => 'debb_config_node_index',
			'attributes' => array('class' => 'one first')
		));

		$menu->addChild($this->translateIt('debb_config.nodegroup.plural', array(), 'crud'), array(
			'route' => 'debb_config_nodegroup_index',
			'attributes' => array('class' => 'two first')
		));

		$menu->addChild($this->translateIt('debb_config.rack.plural', array(), 'crud'), array(
			'route' => 'debb_config_rack_index',
			'attributes' => array('class' => 'three first')
		));

		$menu->addChild($this->translateIt('debb_config.room.plural', array(), 'crud'), array(
			'route' => 'debb_config_room_index',
			'attributes' => array('class' => 'four first')
		));

		$menu->addChild(
			$this->translateIt('import.%name%', array('%name%' => '')), array('route' => 'debb_config_default_importdebbcomponentsxml',
			'attributes' => array('class' => 'first', 'style' => 'margin-top: 15px;', 'noextra' => true)));

		return $menu;
	}

	/**
	 * Translate a complete string inclusive (optional) the parameter array
	 * 
	 * @param string $path the word to translate
	 * @param array $options optional array with parameters for translator
	 * @param boolean $complete should we translate the whole $options?
	 * @return string the translated result
	 */
	private function translateIt($path, $options = array(), $domain = 'messages', $complete = true)
	{
		if ($complete && count($options) > 0)
		{
			$optionsNew = array();
			foreach ($options as $var => $val)
			{
				$optionsNew[$var] = $this->translator->trans($val);
			}
			$options = $optionsNew;
		}
		return $this->translator->trans($path, $options, $domain);
	}

}
