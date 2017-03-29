<?php

namespace Hlrs\AdministrationBundle\Menu;
 
use Knp\Menu\FactoryInterface;
use Symfony\Component\DependencyInjection\ContainerAware;
 
class MenuBuilder extends ContainerAware
{
    public function experimentMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');
        $menu->setChildrenAttribute('class', 'nav');    
        
        $menu->addChild('Experiments', array('label' => 'Experiments'))
            ->setAttribute('dropdown', true)
            ->setAttribute('icon', 'icon-list');
        
        $menu['Experiments']->addChild('List', array('route' => 'experiment'))
            ->setAttribute('icon', 'icon-edit');
        $menu['Experiments']->addChild('New', array('route' => 'experiment_create'))
            ->setAttribute('icon', 'icon-edit');
 
        return $menu;
    }
 
    public function debbMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');
        $menu->setChildrenAttribute('class', 'nav');
        
        $menu->addChild('DEBB', array('route' => 'homepage'))
            ->setAttribute('icon', 'icon-list');
  
        return $menu;
    }
    
    public function dcwormsMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');
        $menu->setChildrenAttribute('class', 'nav');
        
        $menu->addChild('DCWorms', array('route' => 'dcworms_gui'))
            ->setAttribute('icon', 'icon-list');
  
        return $menu;
    }
    
    public function coviseMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');
        $menu->setChildrenAttribute('class', 'nav');
        
        $menu->addChild('COVISE', array('route' => 'covise_simulation'))             
             ->setAttribute('icon', 'icon-film');            
  
        return $menu;
    }

    public function mopMenu(FactoryInterface $factory, array $options)
    {
/*        $menu = $factory->createItem('root');
        $menu->setChildrenAttribute('class', 'nav');
        
        $menu->addChild('MOP', array('route' => 'mopgui_onev'))
            ->setAttribute('icon', 'icon-list');
  
        return $menu;
*/	
	$menu = $factory->createItem('root');
        $menu->setChildrenAttribute('class', 'nav');
        
        $menu->addChild('MOP', array('label' => 'MOP'))
             ->setAttribute('dropdown', true)
             ->setAttribute('icon', 'icon-list');
        
        $menu['MOP']->addChild('Standard Mode', array('route' => 'mopgui_onev'))
            ->setAttribute('icon', 'icon-film');
        $menu['MOP']->addChild('Comparision Mode', array('route' => 'mopgui_twov'))
            ->setAttribute('icon', 'icon-film');
  
        return $menu;
    }
    
    public function reportMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');
        $menu->setChildrenAttribute('class', 'nav');
        
        $menu->addChild('Reports', array('label' => 'Reports'))
            ->setAttribute('dropdown', true)
            ->setAttribute('icon', 'icon-list');
        
        $menu['Reports']->addChild('Metric Calculator', array('route' => 'metric_calculator'))
            ->setAttribute('icon', 'icon-edit');
  
        return $menu;
    }	
 
    public function userMenu(FactoryInterface $factory, array $options)
    {
        $menu = $factory->createItem('root');
        $menu->setChildrenAttribute('class', 'nav pull-right');
 
        $menu->addChild('User', array('label' => $this->getUser()))
            ->setAttribute('dropdown', true)
            ->setAttribute('icon', 'icon-user');
 
        $menu['User']->addChild('Edit profile', array('route' => 'fos_user_profile_edit'))
            ->setAttribute('icon', 'icon-edit');
        $menu['User']->addChild('Logout', array('route' => 'fos_user_security_logout'))
            ->setAttribute('icon', 'icon-edit');
 
        return $menu;
    }

	/**
	 * Get a user from the Security Context
	 *
	 * @return mixed
	 *
	 * @throws \LogicException If SecurityBundle is not available
	 *
	 * @see Symfony\Component\Security\Core\Authentication\Token\TokenInterface::getUser()
	 */
	public function getUser()
	{
		if (!$this->container->has('security.context')) {
			throw new \LogicException('The SecurityBundle is not registered in your application.');
		}

		if (null === $token = $this->container->get('security.context')->getToken()) {
			return null;
		}

		if (!is_object($user = $token->getUser())) {
			return null;
		}

		return $user;
	}
}
