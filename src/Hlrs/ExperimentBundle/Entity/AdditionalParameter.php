<?php

namespace Hlrs\ExperimentBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * AddittionalParameters
 *
 * @ORM\Table(name="additionalparameter")
 * @ORM\Entity
 */
class AdditionalParameter
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
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="value", type="string", length=255)
     */
    private $value;

    /**
     * @var string
     *
     * @ORM\Column(name="unidad_medida", type="string", length=255)
     */
    private $unidadMedida;
    
    /**
     * @ORM\ManyToOne(targetEntity="Hlrs\ExperimentBundle\Entity\Trial", inversedBy="additionalParameters")
     * @ORM\JoinColumn(name="trial_id", referencedColumnName="id")
     */
    private $trial;


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
     * Set name
     *
     * @param string $name
     * @return AddittionalParameters
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
     * @return AddittionalParameters
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

    /**
     * Set unidadMedida
     *
     * @param string $unidadMedida
     * @return AddittionalParameters
     */
    public function setUnidadMedida($unidadMedida)
    {
        $this->unidadMedida = $unidadMedida;
    
        return $this;
    }

    /**
     * Get unidadMedida
     *
     * @return string 
     */
    public function getUnidadMedida()
    {
        return $this->unidadMedida;
    }

    /**
     * Set trial
     *
     * @param \Hlrs\ExperimentBundle\Entity\Trial $trial
     * @return Trial
     */
    public function setTrial(\Hlrs\ExperimentBundle\Entity\Experiment $trial = null)
    {
	$this->trial = $trial;		
	return $this;
    }

	/**
	 * Get trial
	 *
	 * @return \Hlrs\ExperimentBundle\Entity\Trial 
	 */
	public function getTrial()
	{
		return $this->trial;
	}
}
