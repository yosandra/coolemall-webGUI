<?php

namespace Hlrs\ExperimentBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Experiment
 *
 * @ORM\Table(name="experiment")
 * @ORM\Entity(repositoryClass="Hlrs\ExperimentBundle\Entity\ExperimentRepository")
 */
class Experiment 
{
     
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="experimentID", type="string", length=155)
     */
    private $experimentID;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=155, nullable=true)
     */
    private $description;
    /**
     * @var string
     *
     * @ORM\Column(name="type", type="string", length=155)
     */
    private $type;

    /**
     * @var \Datetime
     *
     * @ORM\Column(name="timestamp_start", type="datetime")
     */
    private $timestampStart;

    /**
     * @var \Datetime
     *
     * @ORM\Column(name="timestamp_end", type="datetime", nullable=true)
     */
    private $timestampEnd;

//new 04.09
    /**
     * @ORM\OneToMany(targetEntity="Hlrs\ExperimentBundle\Entity\Trial", mappedBy="experiment", cascade={"persist", "remove"})
     * @Assert\Valid()
     */
    private $trials;
    
    /**
     * @ORM\ManyToOne(targetEntity="CoolEmAll\UserBundle\Entity\User", inversedBy="experiments")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user; 
    
    /**
    * Constructor
    */
    public function __construct()
    {
        $this->trials = new \Doctrine\Common\Collections\ArrayCollection();
        $this->timestampStart = new \Datetime('now');
    }
    
    /**
     * Set trials
     *
     * @return Hlrs\ExperimentBundle\Entity\Trial
     */
    public function setTrials(\Doctrine\Common\Collections\Collection $trials)
    {
        $this->trials = $trials;
        foreach ($trials as $trial) {
            $trial->setExperiment($this);
        }
    }
    
    /**
    * Get trials
    *
    * @return \Doctrine\Common\Collections\Collection
    */  
    public function getTrials()
    {
        return $this->trials;
    }    
    
//----
    /**
     * Set user
     *
     * @param \Coolemall\UserBundle\Entity\User $user
     * @return Experiment
     */
    public function setUser(\Coolemall\UserBundle\Entity\User $user = null)
    {
	$this->user = $user;		
	return $this;
    }

    /**
     * Get user
     *
     * @return \Coolemall\UserBundle\Entity\User
     */
    public function getUser()
    {
    	return $this->user;
    }
    
    //---

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
     * Set experimentID
     *
     * @param string $experimentID
     * @return Experiment
     */
    public function setExperimentID($experimentID)
    {
        $this->experimentID = $experimentID;
    
        return $this;
    }

    /**
     * Get experimentID
     *
     * @return string 
     */
    public function getExperimentID()
    {
        return $this->experimentID;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return Experiment
     */
    public function setDescription($description)
    {
        $this->description = $description;
    
        return $this;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set timestampStart
     *
     * @param \Datetime $timestampStart
     * @return Experiment
     */
    public function setTimestampStart($timestampStart)
    {
        $this->timestampStart = $timestampStart;
    
        return $this;
    }

    /**
     * Get timestampStart
     *
     * @return \Datetime 
     */
    public function getTimestampStart()
    {
        return $this->timestampStart;
    }

    /**
     * Set timestampEnd
     *
     * @param \Datetime $timestampEnd
     * @return Experiment
     */
    public function setTimestampEnd($timestampEnd)
    {
        $this->timestampEnd = $timestampEnd;
    
        return $this;
    }

    /**
     * Get timestampEnd
     *
     * @return \Datetime
     */
    public function getTimestampEnd()
    {
        return $this->timestampEnd;
    }
    
    /**
     * Set timestampEnd
     *
     * @param \Type $type
     * @return Experiment
     */
    public function setType($type)
    {
        $this->type = $type;
    
        return $this;
    }

    /**
     * Get type
     *
     * @return \Type 
     */
    public function getType()
    {
        return $this->type;
    }    
    
    public function __toString()
    {
        return $this->getExperimentID();
        //return $this->getType();
    }
    
}

