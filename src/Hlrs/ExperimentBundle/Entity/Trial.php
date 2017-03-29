<?php

namespace Hlrs\ExperimentBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Trial
 *
 * @ORM\Table(name="trial")
 * @ORM\Entity
 */
class Trial
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
     * @ORM\Column(name="trial_name", type="string", length=255)
     */
    
    private $trialName;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="timestamp_start", type="datetime")
     */
    private $timestampStart;
    
    /**
     * @var \DateTime
     *
     * @ORM\Column(name="timestamp_selected", type="datetime", nullable=true)
     */
    private $timestampSelected;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="timestamp_end", type="datetime", nullable=true)
     */
    private $timestampEnd;

    /**
     * @var string
     *
     * @ORM\Column(name="debb_level", type="string", length=255)
     */
    private $debbLevel;

    /**
     * @var string
     *
     * @ORM\Column(name="debb_url", type="string", length=255, nullable=true)
     */
    private $debbUrl;

    /**
     * @var string
     *
     * @ORM\Column(name="application_profile_url", type="string", length=255, nullable=true)
     */
    private $applicationProfileUrl;

    /**
     * @var string
     *
     * @ORM\Column(name="workload_profile_url", type="string", length=255, nullable=true)
     */
    private $workloadProfileUrl;

    /**
     * @var string
     *
     * @ORM\Column(name="path_plmxml", type="string", length=255, nullable=true)
     */
    private $pathPlmxml;

    /**
     * @var string
     *
     * @ORM\Column(name="path_wrl", type="string", length=255, nullable=true)
     */
    private $pathWrl;

    /**
     * @var string
     *
     * @ORM\Column(name="path_stl", type="string", length=255, nullable=true)
     */
    private $pathStl;

    /**
     * @var string
     *
     * @ORM\Column(name="object_path", type="string", length=255, nullable=true)
     */
    private $objectPath;

    /**
     * @var string
     *
     * @ORM\Column(name="testbed_instance", type="string", length=255, nullable=true)
     */
    private $testbedInstance;
    
    /**
     * @var decimal
     *
     * @ORM\Column(name="alpha", type="decimal", scale=2, nullable=true)
     */
    private $alpha;

    /**
     * @var string
     *
     * @ORM\Column(name="baseline_temperature", type="string", length=255, nullable=true)
     */
    private $baselineTemperature;

    /**
     * @var string
     *
     * @ORM\Column(name="ambient_temperature", type="string", length=255, nullable=true)
     */
    private $ambientTemperature;
    

    /**
     * @var string
     *
     * @ORM\Column(name="datacenter_massflow", type="string", length=255, nullable=true)
     */
    private $datacenterMassflow;
    
    /**
     * @ORM\ManyToOne(targetEntity="Hlrs\ExperimentBundle\Entity\Experiment", inversedBy="trials")
     * @ORM\JoinColumn(name="experiment_id", referencedColumnName="id")
     */
    private $experiment; 

     /**
     * @ORM\OneToMany(targetEntity="Hlrs\ExperimentBundle\Entity\AdditionalParameter", mappedBy="trial", cascade={"persist", "remove"})
     */
    
    //relation one to many
    private $additionalParameters;
    /**
    * Constructor
    */
    public function __construct()
    {
        $this->additionalParameters = new \Doctrine\Common\Collections\ArrayCollection();
	 $this->timestampStart = new \DateTime('NOW');
    }
    
    /**
     * Set AdditionalParameters
     *
     * @return Hlrs\ExperimentBundle\Entity\Trial
     */
    public function setAdditionalParameters(\Doctrine\Common\Collections\Collection $additionalParameters)
    {
        $this->additionalParameters = $additionalParameters;
        foreach ($additionalParameters as $additionalParameter) {
            $trial->setTrial($this);
        }
    }
    
    /**
    * Get AdditionalParameters
    *
    * @return \Doctrine\Common\Collections\Collection
    */  
    public function getAdditionalParameters()
    {
        return $this->additionalParameters;
    }    
    
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
     * Set trialName
     *
     * @param string $trialName
     * @return Trial
     */
    public function setTrialName($trialName)
    {
        $this->trialName = $trialName;
    
        return $this;
    }

    /**
     * Get trialName
     *
     * @return string 
     */
    public function getTrialName()
    {
        return $this->trialName;
    }

    /**
     * Set timestampStart
     *
     * @param \DateTime $timestampStart
     * @return Trial
     */
    public function setTimestampStart($timestampStart)
    {
        $this->timestampStart = $timestampStart;
    
        return $this;
    }

    /**
     * Get timestampStart
     *
     * @return \DateTime 
     */
    public function getTimestampStart()
    {
        return $this->timestampStart;
    }
    
    /**
     * Set timestampSelected
     *
     * @param \DateTime $timestampSelected
     * @return Trial
     */
    public function setTimestampSelected($timestampSelected)
    {
        $this->timestampSelected = $timestampSelected;
    
        return $this;
    }

    /**
     * Get timestampSelected
     *
     * @return \DateTime 
     */
    public function getTimestampSelected()
    {
        return $this->timestampSelected;
    }

    /**
     * Set timestampEnd
     *
     * @param \DateTime $timestampEnd
     * @return Trial
     */
    public function setTimestampEnd($timestampEnd)
    {
        $this->timestampEnd = $timestampEnd;
    
        return $this;
    }

    /**
     * Get timestampEnd
     *
     * @return \DateTime 
     */
    public function getTimestampEnd()
    {
        return $this->timestampEnd;
    }

    /**
     * Set debbLevel
     *
     * @param string $debbLevel
     * @return Trial
     */
    public function setDebbLevel($debbLevel)
    {
        $this->debbLevel = $debbLevel;
    
        return $this;
    }

    /**
     * Get debbLevel
     *
     * @return string 
     */
    public function getDebbLevel()
    {
        return $this->debbLevel;
    }

    /**
     * Set debbUrl
     *
     * @param string $debbUrl
     * @return Trial
     */
    public function setDebbUrl($debbUrl)
    {
        $this->debbUrl = $debbUrl;
    
        return $this;
    }

    /**
     * Get debbUrl
     *
     * @return string 
     */
    public function getDebbUrl()
    {
        return $this->debbUrl;
    }

    /**
     * Set applicationProfileUrl
     *
     * @param string $applicationProfileUrl
     * @return Trial
     */
    public function setApplicationProfileUrl($applicationProfileUrl)
    {
        $this->applicationProfileUrl = $applicationProfileUrl;
    
        return $this;
    }

    /**
     * Get applicationProfileUrl
     *
     * @return string 
     */
    public function getApplicationProfileUrl()
    {
        return $this->applicationProfileUrl;
    }

    /**
     * Set workloadProfileUrl
     *
     * @param string $workloadProfileUrl
     * @return Trial
     */
    public function setWorkloadProfileUrl($workloadProfileUrl)
    {
        $this->workloadProfileUrl = $workloadProfileUrl;
    
        return $this;
    }

    /**
     * Get workloadProfileUrl
     *
     * @return string 
     */
    public function getWorkloadProfileUrl()
    {
        return $this->workloadProfileUrl;
    }

    /**
     * Set pathPlmxml
     *
     * @param string $pathPlmxml
     * @return Trial
     */
    public function setPathPlmxml($pathPlmxml)
    {
        $this->pathPlmxml = $pathPlmxml;
    
        return $this;
    }

    /**
     * Get pathPlmxml
     *
     * @return string 
     */
    public function getPathPlmxml()
    {
        return $this->pathPlmxml;
    }

    /**
     * Set pathWrl
     *
     * @param string $pathWrl
     * @return Trial
     */
    public function setPathWrl($pathWrl)
    {
        $this->pathWrl = $pathWrl;
    
        return $this;
    }

    /**
     * Get pathWrl
     *
     * @return string 
     */
    public function getPathWrl()
    {
        return $this->pathWrl;
    }

    /**
     * Set pathStl
     *
     * @param string $pathStl
     * @return Trial
     */
    public function setPathStl($pathStl)
    {
        $this->pathStl = $pathStl;
    
        return $this;
    }

    /**
     * Get pathStl
     *
     * @return string 
     */
    public function getPathStl()
    {
        return $this->pathStl;
    }

     /**
     * Set objectPath
     *
     * @param string $objectPath
     * @return Trial
     */
    public function setObjectPath($objectPath)
    {
        $this->objectPath = $objectPath;
    
        return $this;
    }

    /**
     * Get objectPath
     *
     * @return string 
     */
    public function getObjectPath()
    {
        return $this->objectPath;
    }

    /**
     * Set baselineTemperature
     *
     * @param string $baselineTemperature
     * @return Trial
     */
    public function setBaselineTemperature($baselineTemperature)
    {
        $this->baselineTemperature = $baselineTemperature;
    
        return $this;
    }

    /**
     * Set testbedInstance
     *
     * @param string $testbedInstance
     * @return Trial
     */
    public function setTestbedInstance($testbedInstance)
    {
        $this->testbedInstance = $testbedInstance;
    
        return $this;
    }

    /**
     * Get testbedInstance
     *
     * @return string 
     */
    public function getTestbedInstance()
    {
        return $this->testbedInstance;
    }
    
    /**
     * Set alpha
     *
     * @param decimal $alpha
     * @return Trial
     */
    public function setAlpha($alpha)
    {
        $this->alpha = $alpha;
    
        return $this;
    }

    /**
     * Get alpha
     *
     * @return decimal 
     */
    public function getAlpha()
    {
        return $this->alpha;
    }

    /**
     * Get baselineTemperature
     *
     * @return string 
     */
    public function getBaselineTemperature()
    {
        return $this->baselineTemperature;
    }

    /**
     * Set ambientTemperature
     *
     * @param string $ambientTemperature
     * @return Trial
     */
    public function setAmbientTemperature($ambientTemperature)
    {
        $this->ambientTemperature = $ambientTemperature;
    
        return $this;
    }

    /**
     * Get ambientTemperature
     *
     * @return string 
     */
    public function getAmbientTemperature()
    {
        return $this->ambientTemperature;
    }

    /**
     * Set datacenterMassflow
     *
     * @param string $datacenterMassflow
     * @return Trial
     */
    public function setDatacenterMassflow($datacenterMassflow)
    {
        $this->datacenterMassflow = $datacenterMassflow;
    
        return $this;
    }

    /**
     * Get datacenterMassflow
     *
     * @return string 
     */
    public function getDatacenterMassflow()
    {
        return $this->datacenterMassflow;
    }
    
    /**
     * Set experiment
     *
     * @param \Hlrs\ExperimentBundle\Entity\Experiment $experiment
     * @return Trial
     */
    public function setExperiment(\Hlrs\ExperimentBundle\Entity\Experiment $experiment = null)
    {
	$this->experiment = $experiment;		
	return $this;
    }

    /**
     * Get experiment
     *
     * @return \Hlrs\ExperimentBundle\Entity\Experiment
     */
    public function getExperiment()
    {
    	return $this->experiment;
    }
}
