<?php

namespace Irit\MetricReportBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Metric
 *
 * @ORM\Table(name="metrics_report_metric")
 * @ORM\Entity
 */
class Metric
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
     * @ORM\Column(name="experiment", type="string", length=200)
     */
    private $experiment;

    /**
     * @var string
     *
     * @ORM\Column(name="level", type="string", length=50)
     */
    private $level;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=50)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="value", type="string", length=255)
     */
    private $value;


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
     * Set experiment
     *
     * @param string $experiment
     * @return Metric
     */
    public function setExperiment($experiment)
    {
        $this->experiment = $experiment;
    
        return $this;
    }

    /**
     * Get experiment
     *
     * @return string 
     */
    public function getExperiment()
    {
        return $this->experiment;
    }

    /**
     * Set level
     *
     * @param string $level
     * @return Metric
     */
    public function setLevel($level)
    {
        $this->level = $level;
    
        return $this;
    }

    /**
     * Get level
     *
     * @return string 
     */
    public function getLevel()
    {
        return $this->level;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return Metric
     */
    public function setName($name)
    {
        $this->name = $name;
    
        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set value
     *
     * @param string $value
     * @return Metric
     */
    public function setValue($value)
    {
        $this->value = $value;
    
        return $this;
    }

    /**
     * Get value
     *
     * @return string 
     */
    public function getValue()
    {
        return $this->value;
    }
}
