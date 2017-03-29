<?php

namespace Debb\ManagementBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * @author Patrick Bußmann <patrick.bussmann@christmann.info>
 * @Route("/{_locale}/management/mainboard", requirements={"_locale" = "en|de"}, defaults={"_locale" = "en"})
 */
class MainboardController extends BaseController
{
	/**
	 * Displays the mainboard image from mainboard with id
	 *
	 * @Route("/get/image/{id}")
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
    public function getImageAction($id)
    {
		$mainboard = $this->getEntity($id);

		return $this->jsonResponse(array());
    }
}
