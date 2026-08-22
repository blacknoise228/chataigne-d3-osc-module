function sendCommand(command)
{
	local.send("/d3/showcontrol/"+ command);
}

function sendCueCommand(value)
{
	local.send("/d3/showcontrol/cue"+" ", value);
}