<?php

namespace Irit\MetricReportBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Element
 *
 * @ORM\Table(name="metrics_report_element")
 * @ORM\Entity
 */
class Element
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
     * @ORM\Column(name="parent", type="string", length=50)
     */
    private $parent;

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
     * @return Element
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
     * @return Element
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
     * Set parent
     *
     * @param string $parent
     * @return Element
     */
    public function setParent($parent)
    {
        $this->parent = $parent;
    
        return $this;
    }

    /**
     * Get parent
     *
     * @return string 
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * Set value
     *
     * @param string $value
     * @return Element
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
