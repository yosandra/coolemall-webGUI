<?php
namespace CoolEmAll\UserBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="user")
*/
class User extends BaseUser
{
    /**
    * @ORM\Id
    * @ORM\Column(type="integer")
    * @ORM\GeneratedValue(strategy="AUTO")
    */
    protected $id;

    /**
     * @var integer
     *
     * @ORM\Column(name="port_covise", type="integer", nullable=true)
     */
    protected $portCovise;

    /**
     * @var string
     *
     * @ORM\Column(name="host_covise", type="string", nullable=true)
     */
    protected $hostCovise;

    
    /**
     * Set portCovise
     *
     * @param integer $portCovise
     * @return User
     */
    public function setPortCovise($portCovise)
    {
        $this->portCovise = $portCovise;
    
        return $this;
    }

    /**
     * Get portCovise
     *
     * @return integer 
     */
    public function getPortCovise()
    {
        return $this->portCovise;
    }

    /**
     * Set hostCovise
     *
     * @param string $hostCovise
     * @return User
     */
    public function setHostCovise($hostCovise)
    {
        $this->hostCovise = $hostCovise;
    
        return $this;
    }

    /**
     * Get hostCovise
     *
     * @return string 
     */
    public function getHostCovise()
    {
        return $this->hostCovise;
    }



    /**
     * Default construct
     */
    public function __construct()
    {
        parent::__construct();
    }
}
