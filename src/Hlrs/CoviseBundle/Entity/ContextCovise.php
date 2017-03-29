<?php

namespace Hlrs\CoviseBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ContextCovise
 *
 * @ORM\Table(name="context_covise")
 * @ORM\Entity
 */
class ContextCovise
{    
    /**
     * @var integer
     *
     * @ORM\Column(name="port_covise", type="integer")
     * @ORM\Id
     */
    private $portCovise;

    /**
     * @var integer
     *
     * @ORM\Column(name="trial_id", type="integer")
     */
    private $trialId;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set portCovise
     *
     * @param integer $portCovise
     * @return ContextCovise
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
     * Set trialId
     *
     * @param integer $trialId
     * @return ContextCovise
     */
    public function setTrialId($trialId)
    {
        $this->trialId = $trialId;
    
        return $this;
    }

    /**
     * Get trialId
     *
     * @return integer 
     */
    public function getTrialId()
    {
        return $this->trialId;
    }
}

