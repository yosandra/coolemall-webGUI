<?php

namespace Irit\MetricReportBundle\Entity;

class experimentReport
{
    protected $experiment;
    protected $experimentType;
    protected $trial;
    protected $startingTime;
    protected $endingTime;
    protected $usefulWorkNodesList;
    protected $usefulWorkValuesList;
    protected $subSetNodesList;
    protected $debbPath;
    
    public function getExperiment()
    {
        return $this->experiment;
    }
    public function setExperiment($experiment)
    {
        $this->experiment = $experiment;
    }
    
    public function getExperimentType()
    {
        return $this->experimentType;
    }
    public function setExperimentType($experimentType)
    {
        $this->experimentType = $experimentType;
    }
    
    public function getTrial()
    {
        return $this->trial;
    }
    public function setTrial($trial)
    {
        $this->trial = $trial;
    }
    
    public function getStartingTime()
    {
        return $this->startingTime;
    }
    public function setStartingTime($startingTime)
    {
        $this->startingTime = $startingTime;
    }
    
    public function getEndingTime()
    {
        return $this->endingTime;
    }
    public function setEndingTime($endingTime)
    {
        $this->endingTime = $endingTime;
    }
    
    public function getUsefulWorkNodesList()
    {
        return $this->usefulWorkNodesList;
    }
    public function setUsefulWorkNodesList($usefulWorkNodesList)
    {
        $this->usefulWorkNodesList = $usefulWorkNodesList;
    }
    
    public function getUsefulWorkValuesList()
    {
        return $this->usefulWorkValuesList;
    }
    public function setUsefulWorkValuesList($usefulWorkValuesList)
    {
        $this->usefulWorkValuesList = $usefulWorkValuesList;
    }
    
    public function getSubSetNodesList()
    {
        return $this->subSetNodesList;
    }
    public function setSubSetNodesList($subSetNodesList)
    {
        $this->subSetNodesList = $subSetNodesList;
    }
    
    public function getDebbPath()
    {
        return $this->debbPath;
    }
    public function setDebbPath($debbPath)
    {
        $this->debbPath = $debbPath;
    }
}
