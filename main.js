var deviceSpecific = {
    printers: ['1.3.6.1.2.1.43.2', '1.3.6.1.2.1.43.5', '1.3.6.1.2.1.43.6', '1.3.6.1.2.1.43.7', '1.3.6.1.2.1.43.8', '1.3.6.1.2.1.43.9', '1.3.6.1.2.1.43.10',
        '1.3.6.1.2.1.43.11', '1.3.6.1.2.1.43.12', '1.3.6.1.2.1.43.13', '1.3.6.1.2.1.43.14', '1.3.6.1.2.1.43.15', '1.3.6.1.2.1.43.16', '1.3.6.1.2.1.43.17',
        '1.3.6.1.2.1.43.18', '1.3.6.1.2.1.43.30', '1.3.6.1.2.1.43.31', '1.3.6.1.2.1.43.32', '1.3.6.1.2.1.25.3.5.1.1', '1.3.6.1.2.1.25.3.5.1.2'
    ],
    routers: ['1.3.6.1.2.1.1.7', '1.3.6.1.2.1.4.1', '1.3.6.1.2.1.15.3', '1.3.6.1.2.1.14.2', '1.3.6.1.2.1.14.4', '1.3.6.1.3.96.1.3',
        '1.3.6.1.3.96.1.6', '1.3.6.1.3.118.1.2.2'
    ],
    switches: ['1.3.6.1.2.1.17.0', '1.3.6.1.2.1.17.1', '1.3.6.1.2.1.17.2', '1.3.6.1.2.1.17.3', '1.3.6.1.2.1.17.4', '1.3.6.1.2.1.17.5', '1.3.6.1.2.1.17.6',
        '1.3.6.1.2.1.17.7', '1.3.6.1.2.1.17.8', '1.3.6.1.2.1.17.10'
    ],
    hosts: ['1.3.6.1.2.1.25.1', '1.3.6.1.2.1.25.2', '1.3.6.1.2.1.25.3', '1.3.6.1.2.1.25.4', '1.3.6.1.2.1.25.5', '1.3.6.1.2.1.25.6', '1.3.6.1.2.1.25.7'],
    ups: ['1.3.6.1.2.1.33.1', '1.3.6.1.2.1.33.2', '1.3.6.1.2.1.33.3']
}


var devices = {
    printers: [{
            oid: '1.3.6.1.2.1.43.2',
            name: 'prtMIBConformance',
            desc: 'Conformance information'
        },
        {
            oid: '1.3.6.1.2.1.43.5',
            name: 'prtGeneral',
            desc: 'General printer group'
        }
    ]
}

function createList(typeDev, arr) {

    var txtObj = typeDev + ':[';
    arr.forEach(function(element, i, a) {
        txtObj += '{oid:"' + element[0] + '",' +
            'name:"' + element[1] + '",' +
            'descr:"' + element[2] + '"}';
        if (i !== a.length - 1) {
            txtObj += ','
        }
    });
    txtObj += ']'
    return txtObj;
}

var routers = [
    ['1.3.6.1.2.1.1.7', 'sysServices', 'A value which indicates the set of services that this entity primarily offers'],
    ['1.3.6.1.2.1.4.1', 'ipForwarding', 'The indication of whether this entity is acting as an IPv4 router'],
    ['[1.3.6.1.2.1.15.3', 'bgpPeerTable', 'BGP peer table'],
    ['1.3.6.1.2.1.14.2', 'ospfAreaTable', 'Information describing the configured parameters and cumulative statistics'],
    ['1.3.6.1.2.1.14.4', 'ospfLsdbTabl', 'The OSPF Process\ s link state database(LSDB)'],
    ['1.3.6.1.3.96.1.3', 'mplsInSegmentTable', 'This table contains a collection of incoming segments to an LSR'],
    ['1.3.6.1.3.96.1.6', 'mplsOutSegmentTable', 'This table contains a representation of the outgoing segments from an LSR'],
    ['1.3.6.1.3.118.1.2.2', 'mplsVpnVrfTable', 'mplsVpnVrfTable']
];


var switches = [
    ['1.3.6.1.2.1.17.0', 'dot1dNotifications', 'Notifications'],
    ['1.3.6.1.2.1.17.1', 'dot1dBase', '"dot1dBase" group'],
    ['1.3.6.1.2.1.17.2', 'dot1dStp', '"dot1dStp" group'],
    ['1.3.6.1.2.1.17.3', 'dot1dSr', '"dot1dSr" group'],
    ['1.3.6.1.2.1.17.4', 'dot1dTp', '"dot1dTp" group'],
    ['1.3.6.1.2.1.17.5', 'dot1dStatic', '"dot1dStatic" group'],
    ['1.3.6.1.2.1.17.6', 'pBridgeMIB', 'The Bridge MIB Extension module'],
    ['1.3.6.1.2.1.17.7', 'qBridgeMIB', 'The VLAN Bridge MIB module'],
    ['1.3.6.1.2.1.17.8', 'dot1dConformance', 'Conformance'],
    ['1.3.6.1.2.1.17.10', 'dot1dPortPair', '"dot1dPortPair" group']
]
var hosts = [
    ['1.3.6.1.2.1.25.1', 'hrSystem', 'System'],
    ['1.3.6.1.2.1.25.2', 'hrStorage', 'Storage'],
    ['1.3.6.1.2.1.25.3', 'hrDevice', 'Host resources device'],
    ['1.3.6.1.2.1.25.4', 'hrSWRun', 'Host resources software run'],
    ['1.3.6.1.2.1.25.5', 'hrSWRunPerf', 'Host resources software run performance'],
    ['1.3.6.1.2.1.25.6', 'hrSWInstalled', 'Host resources software installed'],
    ['1.3.6.1.2.1.25.7', 'hrMIBAdminInfo', 'Admin info']
]
var printers = [
    ['1.3.6.1.2.1.43.2', 'prtMIBConformance', 'Conformance information'],
    ['1.3.6.1.2.1.43.5', 'prtGeneral', 'General printer group'],
    ['1.3.6.1.2.1.43.6', 'prtCover', 'Cover table'],
    ['1.3.6.1.2.1.43.7', 'prtLocalization', 'Localization table'],
    ['1.3.6.1.2.1.43.8', 'prtInput', 'Input group'],
    ['1.3.6.1.2.1.43.9', 'prtOutput', 'Output sub-units'],
    ['1.3.6.1.2.1.43.10', 'prtMarker', 'Marker group'],
    ['1.3.6.1.2.1.43.11', 'prtMarkerSupplies', 'Marker supplies group'],
    ['1.3.6.1.2.1.43.12', 'prtMarkerColorant', 'Marker colorant group'],
    ['1.3.6.1.2.1.43.13', 'prtMediaPath', 'Media path group'],
    ['1.3.6.1.2.1.43.14', 'prtChannel', 'Channel table'],
    ['1.3.6.1.2.1.43.15', 'prtInterpreter', 'Interpreter group'],
    ['1.3.6.1.2.1.43.16', 'prtConsoleDisplayBuffer', 'Display buffer table'],
    ['1.3.6.1.2.1.43.17', 'prtConsoleLights', 'Console light table'],
    ['1.3.6.1.2.1.43.18', 'prtAlert', 'Alerts group'],
    ['1.3.6.1.2.1.43.30', 'finDevice', 'Finisher device group'],
    ['1.3.6.1.2.1.43.31', 'finSupply', 'Finisher supply group'],
    ['1.3.6.1.2.1.43.31', 'finSupplyMediaInput', 'Finisher supply, media input group'],
    ['1.3.6.1.2.1.43.32', 'finDeviceAttribute', 'Finisher device attribute group'],
    ['1.3.6.1.2.1.25.3.5.1.1', 'hrPrinterStatus', 'The current status of this printer device'],
    ['1.3.6.1.2.1.25.3.5.1.2', 'hrPrinterDetectedErrorState', 'This object represents any error conditions detected by the printer']
]

var ups = [
    ['1.3.6.1.2.1.33.1.1.1', 'upsIdentManufacturer', 'The name of the UPS manufacturer'],
    ['1.3.6.1.2.1.33.1.1.2', 'upsIdentModel', 'The UPS Model designation'],
    ['1.3.6.1.2.1.33.1.1.3', 'upsIdentUPSSoftwareVersion', 'The UPS firmware/software version(s)'],
    ['1.3.6.1.2.1.33.1.1.4', 'upsIdentAgentSoftwareVersion', 'The UPS agent software version'],
    ['1.3.6.1.2.1.33.1.1.5', 'upsIdentName', 'A string identifying the UPS'],
    ['1.3.6.1.2.1.33.1.1.6', 'upsIdentAttachedDevices', 'A string identifying the devices attached to the output(s) of the UPS'],
    ['1.3.6.1.2.1.33.1.2.1', 'upsBatteryStatus', 'The indication of the capacity remaining in the UPS systems batteries'],
    ['1.3.6.1.2.1.33.1.2.2', 'upsSecondsOnBattery', 'If the unit is on battery power, the elapsed time since the UPS last switched to battery power'],
    ['1.3.6.1.2.1.33.1.2.3', 'upsEstimatedMinutesRemaining', 'An estimate of the time to battery charge depletion'],
    ['1.3.6.1.2.1.33.1.2.4', 'upsEstimatedChargeRemaining', 'An estimate of the battery charge remaining expressed as a percent of full charge'],
    ['1.3.6.1.2.1.33.1.2.5', 'upsBatteryVoltage', 'The magnitude of the present battery voltage'],
    ['1.3.6.1.2.1.33.1.2.6', 'upsBatteryCurrent', 'The present battery current'],
    ['1.3.6.1.2.1.33.1.2.7', 'upsBatteryTemperature', 'The ambient temperature at or near the UPS Battery casing'],
    ['1.3.6.1.2.1.33.1.3.1', 'upsInputLineBads', 'A count of the number of times the input entered an out-of-tolerance condition as defined by the manufacturer'],
    ['1.3.6.1.2.1.33.1.3.2', 'upsInputNumLines', 'The number of input lines utilized in this device'],
    ['1.3.6.1.2.1.33.1.3.3.1.1', 'upsInputLineIndex', 'The input line identifier'],
    ['1.3.6.1.2.1.33.1.3.3.1.2', 'upsInputFrequency', 'The present input frequency'],
    ['1.3.6.1.2.1.33.1.3.3.1.3', 'upsInputVoltage', 'The magnitude of the present input voltage'],
    ['1.3.6.1.2.1.33.1.3.3.1.4', 'upsInputCurrent', 'The magnitude of the present input current'],
    ['1.3.6.1.2.1.33.1.3.3.1.5', 'upsInputTruePower', 'The magnitude of the present input true power'],
    ['1.3.6.1.2.1.33.1.4.1', 'upsOutputSource', 'The present source of output power'],
    ['1.3.6.1.2.1.33.1.4.2', 'upsOutputFrequency', 'The present output frequency'],
    ['1.3.6.1.2.1.33.1.4.3', 'upsOutputNumLines', 'The number of output lines utilized in this device'],
    ['1.3.6.1.2.1.33.1.4.4.1.1', 'upsOutputLineIndex', 'The output line identifier'],
    ['1.3.6.1.2.1.33.1.4.4.1.2', 'upsOutputVoltage', 'The present output voltage'],
    ['1.3.6.1.2.1.33.1.4.4.1.3', 'upsOutputCurrent', 'The present output current'],
    ['1.3.6.1.2.1.33.1.4.4.1.4', 'upsOutputPower', 'The present output true power'],
    ['1.3.6.1.2.1.33.1.4.4.1.5', 'upsOutputPercentLoad', 'The percentage of the UPS power capacity'],
    ['1.3.6.1.2.1.33.1.5.1', 'upsBypassFrequency', 'The present bypass frequency'],
    ['1.3.6.1.2.1.33.1.5.2', 'upsBypassNumLines', 'The number of bypass lines utilized in this device'],
    ['1.3.6.1.2.1.33.1.5.3.1.1', 'upsBypassLineIndex', 'The bypass line identifier'],
    ['1.3.6.1.2.1.33.1.5.3.1.2', 'upsBypassVoltage', 'The present bypass voltage'],
    ['1.3.6.1.2.1.33.1.5.3.1.3', 'upsBypassCurrent', 'The present bypass current'],
    ['1.3.6.1.2.1.33.1.5.3.1.4', 'upsBypassPower', 'The present true power conveyed by the bypass'],
    ['1.3.6.1.2.1.33.1.6.1', 'upsAlarmsPresent', 'The present number of active alarm conditions'],
    ['1.3.6.1.2.1.33.1.6.2.1.1', 'upsAlarmId', 'A unique identifier for an alarm condition'],
    ['1.3.6.1.2.1.33.1.6.2.1.2', 'upsAlarmDescr', 'A reference to an alarm description object'],
    ['1.3.6.1.2.1.33.1.6.2.1.3', 'upsAlarmTime', 'The value of sysUpTime when the alarm condition was detected'],
    ['1.3.6.1.2.1.33.1.6.3.1', 'upsAlarmBatteryBad', 'One or more batteries have been determined to require replacement'],
    ['1.3.6.1.2.1.33.1.6.3.2', 'upsAlarmOnBattery', 'The UPS is drawing power from the batteries'],
    ['1.3.6.1.2.1.33.1.6.3.3', 'upsAlarmLowBattery', 'The remaining battery run-time is less than or equal to upsConfigLowBattTime'],
    ['1.3.6.1.2.1.33.1.6.3.4', 'upsAlarmDepletedBattery', 'The UPS will be unable to sustain the present load when and if the utility power is lost'],
    ['1.3.6.1.2.1.33.1.6.3.5', 'upsAlarmTempBad', 'A temperature is out of tolerance'],
    ['1.3.6.1.2.1.33.1.6.3.6', 'upsAlarmInputBad', 'An input condition is out of tolerance'],
    ['1.3.6.1.2.1.33.1.6.3.7', 'upsAlarmOutputBad', 'An output condition (other than OutputOverload) is out of tolerance'],
    ['1.3.6.1.2.1.33.1.6.3.8', 'upsAlarmOutputOverload', 'The output load exceeds the UPS output capacity'],
    ['1.3.6.1.2.1.33.1.6.3.9', 'upsAlarmOnBypass', 'The Bypass is presently engaged on the UPS'],
    ['1.3.6.1.2.1.33.1.6.3.10', 'upsAlarmBypassBad', 'The Bypass is out of tolerance'],
    ['1.3.6.1.2.1.33.1.6.3.11', 'upsAlarmOutputOffAsRequested', 'The UPS has shutdown as requested, i.e., the output is off'],
    ['1.3.6.1.2.1.33.1.6.3.12', 'upsAlarmUpsOffAsRequested', 'The entire UPS has shutdown as commanded'],
    ['1.3.6.1.2.1.33.1.6.3.13', 'upsAlarmChargerFailed', 'An uncorrected problem has been detected within the UPS charger subsystem'],
    ['1.3.6.1.2.1.33.1.6.3.14', 'upsAlarmUpsOutputOff', 'The output of the UPS is in the off state'],
    ['1.3.6.1.2.1.33.1.6.3.15', 'upsAlarmUpsSystemOff', 'The UPS system is in the off state'],
    ['1.3.6.1.2.1.33.1.6.3.16', 'upsAlarmFanFailure', 'The failure of one or more fans in the UPS has been detected'],
    ['1.3.6.1.2.1.33.1.6.3.17', 'upsAlarmFuseFailure', 'The failure of one or more fuses has been detected'],
    ['1.3.6.1.2.1.33.1.6.3.18', 'upsAlarmGeneralFault', 'A general fault in the UPS has been detected'],
    ['1.3.6.1.2.1.33.1.6.3.19', 'upsAlarmDiagnosticTestFailed', 'The result of the last diagnostic test indicates a failure'],
    ['1.3.6.1.2.1.33.1.6.3.20', 'upsAlarmCommunicationsLost', 'A problem has been encountered in the communications between the agent and the UPS'],
    ['1.3.6.1.2.1.33.1.6.3.21', 'upsAlarmAwaitingPower', 'The UPS output is off and the UPS is awaiting the return of input power'],
    ['1.3.6.1.2.1.33.1.6.3.22', 'upsAlarmShutdownPending', 'A upsShutdownAfterDelay countdown is underway'],
    ['1.3.6.1.2.1.33.1.6.3.23', 'upsAlarmShutdownImminent', 'The UPS will turn off power to the load in less than 5 seconds'],
    ['1.3.6.1.2.1.33.1.6.3.24', 'upsAlarmTestInProgress', 'A test is in progress, as initiated and indicated by the Test Group'],
    ['1.3.6.1.2.1.33.1.6.4.0', 'upsAlarmID', 'upsAlarmID '],
    ['1.3.6.1.2.1.33.1.6.5.0', 'upsAlarmDESCR', 'upsAlarmDESCR'],
    ['1.3.6.1.2.1.33.1.7.1', 'upsTestId', 'The test is named by an OBJECT IDENTIFIER which allows a standard mechanism for the initiation of tests'],
    ['1.3.6.1.2.1.33.1.7.2', 'upsTestSpinLock', 'A spin lock on the test subsystem'],
    ['1.3.6.1.2.1.33.1.7.3', 'upsTestResultsSummary', 'The results of the current or last UPS diagnostics test performed'],
    ['1.3.6.1.2.1.33.1.7.4', 'upsTestResultsDetail', 'Additional information about upsTestResultsSummary'],
    ['1.3.6.1.2.1.33.1.7.5', 'upsTestStartTime', 'The value of sysUpTime at the time the test in progress was initiated'],
    ['1.3.6.1.2.1.33.1.7.6', 'upsTestElapsedTime', 'The amount of time, in TimeTicks, since the test in progress was initiated'],
    ['1.3.6.1.2.1.33.1.7.7.1', 'upsTestNoTestsInitiated', 'No tests have been initiated and no test is in progress'],
    ['1.3.6.1.2.1.33.1.7.7.2', 'upsTestAbortTestInProgress', 'The test in progress is to be aborted'],
    ['1.3.6.1.2.1.33.1.7.7.3', 'upsTestGeneralSystemsTest', 'The manufacturers standard test of UPS device systems'],
    ['1.3.6.1.2.1.33.1.7.7.4', 'upsTestQuickBatteryTest', 'A test that is sufficient to determine if the battery needs replacement'],
    ['1.3.6.1.2.1.33.1.7.7.5', 'upsTestDeepBatteryCalibration', 'The system is placed on battery to a discharge level, set by the manufacturer'],
    ['1.3.6.1.2.1.33.1.8.1', 'upsShutdownType', 'This object determines the nature of the action to be taken at the time when the countdown of the upsShutdownAfterDelay and upsRebootWithDuration objects reaches zero'],
    ['1.3.6.1.2.1.33.1.8.2', 'upsShutdownAfterDelay', 'Setting this object will shutdown either the UPS output or the UPS system after the indicated number of seconds'],
    ['1.3.6.1.2.1.33.1.8.3', 'upsStartupAfterDelay', 'Setting this object will start the output after the indicated number of seconds, including starting the UPS'],
    ['1.3.6.1.2.1.33.1.8.4', 'upsRebootWithDuration', 'Setting this object will immediately shutdown'],
    ['1.3.6.1.2.1.33.1.8.5', 'upsAutoRestart', 'Setting this object to on will cause the UPS system to restart after a shutdown'],
    ['1.3.6.1.2.1.33.1.9.1', 'upsConfigInputVoltage', 'The magnitude of the nominal input voltage'],
    ['1.3.6.1.2.1.33.1.9.2', 'upsConfigInputFreq', 'The nominal input frequency'],
    ['1.3.6.1.2.1.33.1.9.3', 'upsConfigOutputVoltage', 'The magnitude of the nominal output voltage'],
    ['1.3.6.1.2.1.33.1.9.4', 'upsConfigOutputFreq', 'The nominal output frequency'],
    ['1.3.6.1.2.1.33.1.9.5', 'upsConfigOutputVA', 'The magnitude of the nominal Volt-Amp rating'],
    ['1.3.6.1.2.1.33.1.9.6', 'upsConfigOutputPower', 'The magnitude of the nominal true power rating'],
    ['1.3.6.1.2.1.33.1.9.7', 'upsConfigLowBattTime', 'The value of upsEstimatedMinutesRemaining at which a lowBattery condition is declared'],
    ['1.3.6.1.2.1.33.1.9.8', 'upsConfigAudibleStatus', 'The requested state of the audible alarm'],
    ['1.3.6.1.2.1.33.1.9.9', 'upsConfigLowVoltageTransferPoint', 'he minimum input line voltage allowed before the UPS system transfers to battery backup'],
    ['1.3.6.1.2.1.33.1.9.10', 'upsConfigHighVoltageTransferPoint', 'The maximum line voltage allowed before the UPS system transfers to battery backup'],
    ['1.3.6.1.2.1.33.2.1', 'upsTrapOnBattery', 'The UPS is operating on battery power'],
    ['1.3.6.1.2.1.33.2.2', 'upsTrapTestCompleted', 'This trap is sent upon completion of a UPS diagnostic test'],
    ['1.3.6.1.2.1.33.2.3', 'upsTrapAlarmEntryAdded', 'This trap is sent each time an alarm is inserted into to the alarm table'],
    ['1.3.6.1.2.1.33.2.4', 'upsTrapAlarmEntryRemoved', 'This trap is sent each time an alarm is removed from the alarm table'],
    ['1.3.6.1.2.1.33.3.1.1', 'upsSubsetCompliance', 'The compliance statement for UPSs that only support the two-contact communication protocol'],
    ['1.3.6.1.2.1.33.3.1.2', 'upsBasicCompliance', 'The compliance statement for UPSs that support full-featured functions, such as control'],
    ['1.3.6.1.2.1.33.3.1.3', 'upsFullCompliance', 'The compliance statement for UPSs that support advanced full-featured functions'],
    ['1.3.6.1.2.1.33.3.2.1', 'upsSubsetGroups', 'Subset groups'],
    ['1.3.6.1.2.1.33.3.2.1.1', 'upsSubsetIdentGroup', 'The upsSubsetIdentGroup defines objects which are common across all UPSs which meet subset compliance'],
    ['1.3.6.1.2.1.33.3.2.1.2', 'upsSubsetBatteryGroup', 'The upsSubsetBatteryGroup defines the objects that are common to battery groups of two-contact UPSs'],
    ['1.3.6.1.2.1.33.3.2.1.3', 'upsSubsetInputGroup', 'The upsSubsetInputGroup defines the objects that are common to the Input groups of two-contact UPSs'],
    ['1.3.6.1.2.1.33.3.2.1.4', 'upsSubsetOutputGroup', 'The upsSubsetOutputGroup defines the objects that are common to the Output groups of two-contact UPSs'],
    ['1.3.6.1.2.1.33.3.2.1.6', 'upsSubsetAlarmGroup', 'The upsSubsetAlarmGroup defines the objects that are common to the Alarm groups of two-contact UPSs'],
    ['1.3.6.1.2.1.33.3.2.1.8', 'upsSubsetControlGroup', 'The upsSubsetControlGroup defines the objects that are common to the Control groups of two-contact UPSs'],
    ['1.3.6.1.2.1.33.3.2.1.9', 'upsSubsetConfigGroup', 'The upsSubsetConfigGroup defines the objects that are common to the Config groups of two-contact UPSs'],
    ['1.3.6.1.2.1.33.3.2.2.1', 'upsBasicIdentGroup', 'The upsBasicIdentGroup defines objects which are common to the Ident group of compliant UPSs which support basic functions'],
    ['1.3.6.1.2.1.33.3.2.2.2', 'upsBasicBatteryGroup', 'The upsBasicBatteryGroup defines the objects that are common to the battery groups of compliant UPSs which support basic functions'],
    ['1.3.6.1.2.1.33.3.2.2.3', 'upsBasicInputGroup', 'The upsBasicInputGroup defines the objects that are common to the Input groups of compliant UPSs which support basic functions'],
    ['1.3.6.1.2.1.33.3.2.2.4', 'upsBasicOutputGroup', 'The upsBasicOutputGroup defines the objects that are common to the Output groups of compliant UPSs which support basic functions'],
    ['1.3.6.1.2.1.33.3.2.2.5', 'upsBasicBypassGroup', 'The upsBasicBypassGroup defines the objects that are common to the Bypass groups of compliant UPSs which support basic functions'],
    ['1.3.6.1.2.1.33.3.2.2.6', 'upsBasicAlarmGroup', 'The upsBasicAlarmGroup defines the objects that are common to the Alarm groups of compliant UPSs which support basic functions'],
    ['1.3.6.1.2.1.33.3.2.2.7', 'upsBasicTestGroup', 'The upsBasicTestGroup defines the objects that are common to the Test groups of compliant UPSs which support basic functions'],
    ['1.3.6.1.2.1.33.3.2.2.8', 'upsBasicControlGroup', 'The upsBasicControlGroup defines the objects that are common to the Control groups of compliant UPSs which support basic functions'],
    ['1.3.6.1.2.1.33.3.2.2.9', 'upsBasicConfigGroup', 'The upsBasicConfigGroup defines the objects that are common to the Config groups of UPSs which support basic functions'],
    ['1.3.6.1.2.1.33.3.2.3.1', 'upsFullIdentGroup', 'The upsFullIdentGroup defines objects which are common to the Ident group of fully compliant UPSs'],
    ['1.3.6.1.2.1.33.3.2.3.2', 'upsFullBatteryGroup', 'The upsFullBatteryGroup defines the objects that are common to the battery groups of fully compliant UPSs'],
    ['1.3.6.1.2.1.33.3.2.3.3', 'upsFullInputGroup', 'The upsFullInputGroup defines the objects that are common to the Input groups of fully compliant UPSs'],
    ['1.3.6.1.2.1.33.3.2.3.4', 'upsFullOutputGroup', 'The upsFullOutputGroup defines the objects that are common to the Output groups of fully compliant UPSs'],
    ['1.3.6.1.2.1.33.3.2.3.5', 'upsFullBypassGroup', 'The upsFullBypassGroup defines the objects that are common to the Bypass groups of fully compliant UPSs'],
    ['1.3.6.1.2.1.33.3.2.3.6', 'upsFullAlarmGroup', 'The upsFullAlarmGroup defines the objects that are common to the Alarm groups of fully compliant UPSs'],
    ['1.3.6.1.2.1.33.3.2.3.7', 'upsFullTestGroup', 'The upsFullTestGroup defines the objects that are common to the Test groups of fully compliant UPSs'],
    ['1.3.6.1.2.1.33.3.2.3.8', 'upsFullControlGroup', 'The upsFullControlGroup defines the objects that are common to the Control groups of fully compliant UPSs'],
    ['1.3.6.1.2.1.33.3.2.3.9', 'upsFullConfigGroup', 'The upsFullConfigGroup defines the objects that are common to the Config groups of fully compliant UPSs']
]

console.log(createList('UPSs', ups));


UPSs: [{
        oid: "1.3.6.1.2.1.33.1.1.1",
        name: "upsIdentManufacturer",
        descr: "The name of the UPS manufacturer"
    }, {
        oid: "1.3.6.1.2.1.33.1.1.2",
        name: "upsIdentModel",
        descr: "The UPS Model designation"
    }, {
        oid: "1.3.6.1.2.1.33.1.1.3",
        name: "upsIdentUPSSoftwareVersion",
        descr: "The UPS firmware/software version(s)"
    }, {
        oid: "1.3.6.1.2.1.33.1.1.4",
        name: "upsIdentAgentSoftwareVersion",
        descr: "The UPS agent software version"
    }, {
        oid: "1.3.6.1.2.1.33.1.1.5",
        name: "upsIdentName",
        descr: "A string identifying the UPS"
    }, {
        oid: "1.3.6.1.2.1.33.1.1.6",
        name: "upsIdentAttachedDevices",
        descr: "A string identifying the devices attached to the output(s) of the UPS"
    }, {
        oid: "1.3.6.1.2.1.33.1.2.1",
        name: "upsBatteryStatus",
        descr: "The indication of the capacity remaining in the UPS systems batteries"
    }, {
        oid: "1.3.6.1.2.1.33.1.2.2",
        name: "upsSecondsOnBattery",
        descr: "If the unit is on battery power, the elapsed time since the UPS last switched to battery power"
    }, {
        oid: "1.3.6.1.2.1.33.1.2.3",
        name: "upsEstimatedMinutesRemaining",
        descr: "An estimate of the time to battery charge depletion"
    }, {
        oid: "1.3.6.1.2.1.33.1.2.4",
        name: "upsEstimatedChargeRemaining",
        descr: "An estimate of the battery charge remaining expressed as a percent of full charge"
    }, {
        oid: "1.3.6.1.2.1.33.1.2.5",
        name: "upsBatteryVoltage",
        descr: "The magnitude of the present battery voltage"
    }, {
        oid: "1.3.6.1.2.1.33.1.2.6",
        name: "upsBatteryCurrent",
        descr: "The present battery current"
    }, {
        oid: "1.3.6.1.2.1.33.1.2.7",
        name: "upsBatteryTemperature",
        descr: "The ambient temperature at or near the UPS Battery casing"
    },
    {
        oid: "1.3.6.1.2.1.33.1.3.1",
        name: "upsInputLineBads",
        descr: "A count of the number of times the input entered an out-of-tolerance condition as defined by the manufacturer"
    },
    {
        oid: "1.3.6.1.2.1.33.1.3.2",
        name: "upsInputNumLines",
        descr: "The number of input lines utilized in this device"
    }, {
        oid: "1.3.6.1.2.1.33.1.3.3.1.1",
        name: "upsInputLineIndex",
        descr: "The input line identifier"
    },
    {
        oid: "1.3.6.1.2.1.33.1.3.3.1.2",
        name: "upsInputFrequency",
        descr: "The present input frequency"
    },
    {
        oid: "1.3.6.1.2.1.33.1.3.3.1.3",
        name: "upsInputVoltage",
        descr: "The magnitude of the present input voltage"
    },
    {
        oid: "1.3.6.1.2.1.33.1.3.3.1.4",
        name: "upsInputCurrent",
        descr: "The magnitude of the present input current"
    },
    {
        oid: "1.3.6.1.2.1.33.1.3.3.1.5",
        name: "upsInputTruePower",
        descr: "The magnitude of the present input true power"
    },
    {
        oid: "1.3.6.1.2.1.33.1.4.1",
        name: "upsOutputSource",
        descr: "The present source of output power"
    },
    {
        oid: "1.3.6.1.2.1.33.1.4.2",
        name: "upsOutputFrequency",
        descr: "The present output frequency"
    },
    {
        oid: "1.3.6.1.2.1.33.1.4.3",
        name: "upsOutputNumLines",
        descr: "The number of output lines utilized in this device"
    },
    {
        oid: "1.3.6.1.2.1.33.1.4.4.1.1",
        name: "upsOutputLineIndex",
        descr: "The output line identifier"
    },
    {
        oid: "1.3.6.1.2.1.33.1.4.4.1.2",
        name: "upsOutputVoltage",
        descr: "The present output voltage"
    },
    {
        oid: "1.3.6.1.2.1.33.1.4.4.1.3",
        name: "upsOutputCurrent",
        descr: "The present output current"
    },
    {
        oid: "1.3.6.1.2.1.33.1.4.4.1.4",
        name: "upsOutputPower",
        descr: "The present output true power"
    },
    {
        oid: "1.3.6.1.2.1.33.1.4.4.1.5",
        name: "upsOutputPercentLoad",
        descr: "The percentage of the UPS power capacity"
    },
    {
        oid: "1.3.6.1.2.1.33.1.5.1",
        name: "upsBypassFrequency",
        descr: "The present bypass frequency"
    },
    {
        oid: "1.3.6.1.2.1.33.1.5.2",
        name: "upsBypassNumLines",
        descr: "The number of bypass lines utilized in this device"
    },
    {
        oid: "1.3.6.1.2.1.33.1.5.3.1.1",
        name: "upsBypassLineIndex",
        descr: "The bypass line identifier"
    },
    {
        oid: "1.3.6.1.2.1.33.1.5.3.1.2",
        name: "upsBypassVoltage",
        descr: "The present bypass voltage"
    },
    {
        oid: "1.3.6.1.2.1.33.1.5.3.1.3",
        name: "upsBypassCurrent",
        descr: "The present bypass current"
    },
    {
        oid: "1.3.6.1.2.1.33.1.5.3.1.4",
        name: "upsBypassPower",
        descr: "The present true power conveyed by the bypass"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.1",
        name: "upsAlarmsPresent",
        descr: "The present number of active alarm conditions"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.2.1.1",
        name: "upsAlarmId",
        descr: "A unique identifier for an alarm condition"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.2.1.2",
        name: "upsAlarmDescr",
        descr: "A reference to an alarm description object"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.2.1.3",
        name: "upsAlarmTime",
        descr: "The value of sysUpTime when the alarm condition was detected"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.1",
        name: "upsAlarmBatteryBad",
        descr: "One or more batteries have been determined to require replacement"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.2",
        name: "upsAlarmOnBattery",
        descr: "The UPS is drawing power from the batteries"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.3",
        name: "upsAlarmLowBattery",
        descr: "The remaining battery run-time is less than or equal to upsConfigLowBattTime"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.4",
        name: "upsAlarmDepletedBattery",
        descr: "The UPS will be unable to sustain the present load when and if the utility power is lost"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.5",
        name: "upsAlarmTempBad",
        descr: "A temperature is out of tolerance"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.6",
        name: "upsAlarmInputBad",
        descr: "An input condition is out of tolerance"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.7",
        name: "upsAlarmOutputBad",
        descr: "An output condition (other than OutputOverload) is out of tolerance"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.8",
        name: "upsAlarmOutputOverload",
        descr: "The output load exceeds the UPS output capacity"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.9",
        name: "upsAlarmOnBypass",
        descr: "The Bypass is presently engaged on the UPS"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.10",
        name: "upsAlarmBypassBad",
        descr: "The Bypass is out of tolerance"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.11",
        name: "upsAlarmOutputOffAsRequested",
        descr: "The UPS has shutdown as requested, i.e., the output is off"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.12",
        name: "upsAlarmUpsOffAsRequested",
        descr: "The entire UPS has shutdown as commanded"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.13",
        name: "upsAlarmChargerFailed",
        descr: "An uncorrected problem has been detected within the UPS charger subsystem"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.14",
        name: "upsAlarmUpsOutputOff",
        descr: "The output of the UPS is in the off state"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.15",
        name: "upsAlarmUpsSystemOff",
        descr: "The UPS system is in the off state"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.16",
        name: "upsAlarmFanFailure",
        descr: "The failure of one or more fans in the UPS has been detected"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.17",
        name: "upsAlarmFuseFailure",
        descr: "The failure of one or more fuses has been detected"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.18",
        name: "upsAlarmGeneralFault",
        descr: "A general fault in the UPS has been detected"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.19",
        name: "upsAlarmDiagnosticTestFailed",
        descr: "The result of the last diagnostic test indicates a failure"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.20",
        name: "upsAlarmCommunicationsLost",
        descr: "A problem has been encountered in the communications between the agent and the UPS"
    }, {
        oid: "1.3.6.1.2.1.33.1.6.3.21",
        name: "upsAlarmAwaitingPower",
        descr: "The UPS output is off and the UPS is awaiting the return of input power"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.22",
        name: "upsAlarmShutdownPending",
        descr: "A upsShutdownAfterDelay countdown is underway"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.23",
        name: "upsAlarmShutdownImminent",
        descr: "The UPS will turn off power to the load in less than 5 seconds"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.3.24",
        name: "upsAlarmTestInProgress",
        descr: "A test is in progress, as initiated and indicated by the Test Group"
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.4.0",
        name: "upsAlarmID",
        descr: "upsAlarmID "
    },
    {
        oid: "1.3.6.1.2.1.33.1.6.5.0",
        name: "upsAlarmDESCR",
        descr: "upsAlarmDESCR"
    },
    {
        oid: "1.3.6.1.2.1.33.1.7.1",
        name: "upsTestId",
        descr: "The test is named by an OBJECT IDENTIFIER which allows a standard mechanism for the initiation of tests"
    }, {
        oid: "1.3.6.1.2.1.33.1.7.2",
        name: "upsTestSpinLock",
        descr: "A spin lock on the test subsystem"
    },
    {
        oid: "1.3.6.1.2.1.33.1.7.3",
        name: "upsTestResultsSummary",
        descr: "The results of the current or last UPS diagnostics test performed"
    },
    {
        oid: "1.3.6.1.2.1.33.1.7.4",
        name: "upsTestResultsDetail",
        descr: "Additional information about upsTestResultsSummary"
    },
    {
        oid: "1.3.6.1.2.1.33.1.7.5",
        name: "upsTestStartTime",
        descr: "The value of sysUpTime at the time the test in progress was initiated"
    },
    {
        oid: "1.3.6.1.2.1.33.1.7.6",
        name: "upsTestElapsedTime",
        descr: "The amount of time, in TimeTicks, since the test in progress was initiated"
    },
    {
        oid: "1.3.6.1.2.1.33.1.7.7.1",
        name: "upsTestNoTestsInitiated",
        descr: "No tests have been initiated and no test is in progress"
    },
    {
        oid: "1.3.6.1.2.1.33.1.7.7.2",
        name: "upsTestAbortTestInProgress",
        descr: "The test in progress is to be aborted"
    },
    {
        oid: "1.3.6.1.2.1.33.1.7.7.3",
        name: "upsTestGeneralSystemsTest",
        descr: "The manufacturers standard test of UPS device systems"
    },
    {
        oid: "1.3.6.1.2.1.33.1.7.7.4",
        name: "upsTestQuickBatteryTest",
        descr: "A test that is sufficient to determine if the battery needs replacement"
    },
    {
        oid: "1.3.6.1.2.1.33.1.7.7.5",
        name: "upsTestDeepBatteryCalibration",
        descr: "The system is placed on battery to a discharge level, set by the manufacturer"
    },
    {
        oid: "1.3.6.1.2.1.33.1.8.1",
        name: "upsShutdownType",
        descr: "This object determines the nature of the action to be taken at the time when the countdown of the upsShutdownAfterDelay and upsRebootWithDuration objects reaches zero"
    }, {
        oid: "1.3.6.1.2.1.33.1.8.2",
        name: "upsShutdownAfterDelay",
        descr: "Setting this object will shutdown either the UPS output or the UPS system after the indicated number of seconds"
    }, {
        oid: "1.3.6.1.2.1.33.1.8.3",
        name: "upsStartupAfterDelay",
        descr: "Setting this object will start the output after the indicated number of seconds, including starting the UPS"
    }, {
        oid: "1.3.6.1.2.1.33.1.8.4",
        name: "upsRebootWithDuration",
        descr: "Setting this object will immediately shutdown"
    },
    {
        oid: "1.3.6.1.2.1.33.1.8.5",
        name: "upsAutoRestart",
        descr: "Setting this object to on will cause the UPS system to restart after a shutdown"
    },
    {
        oid: "1.3.6.1.2.1.33.1.9.1",
        name: "upsConfigInputVoltage",
        descr: "The magnitude of the nominal input voltage"
    },
    {
        oid: "1.3.6.1.2.1.33.1.9.2",
        name: "upsConfigInputFreq",
        descr: "The nominal input frequency"
    },
    {
        oid: "1.3.6.1.2.1.33.1.9.3",
        name: "upsConfigOutputVoltage",
        descr: "The magnitude of the nominal output voltage"
    },
    {
        oid: "1.3.6.1.2.1.33.1.9.4",
        name: "upsConfigOutputFreq",
        descr: "The nominal output frequency"
    },
    {
        oid: "1.3.6.1.2.1.33.1.9.5",
        name: "upsConfigOutputVA",
        descr: "The magnitude of the nominal Volt-Amp rating"
    },
    {
        oid: "1.3.6.1.2.1.33.1.9.6",
        name: "upsConfigOutputPower",
        descr: "The magnitude of the nominal true power rating"
    },
    {
        oid: "1.3.6.1.2.1.33.1.9.7",
        name: "upsConfigLowBattTime",
        descr: "The value of upsEstimatedMinutesRemaining at which a lowBattery condition is declared"
    }, {
        oid: "1.3.6.1.2.1.33.1.9.8",
        name: "upsConfigAudibleStatus",
        descr: "The requested state of the audible alarm"
    },
    {
        oid: "1.3.6.1.2.1.33.1.9.9",
        name: "upsConfigLowVoltageTransferPoint",
        descr: "he minimum input line voltage allowed before the UPS system transfers to battery backup"
    }, {
        oid: "1.3.6.1.2.1.33.1.9.10",
        name: "upsConfigHighVoltageTransferPoint",
        descr: "The maximum line voltage allowed before the UPS system transfers to battery backup"
    }, {
        oid: "1.3.6.1.2.1.33.2.1",
        name: "upsTrapOnBattery",
        descr: "The UPS is operating on battery power"
    },
    {
        oid: "1.3.6.1.2.1.33.2.2",
        name: "upsTrapTestCompleted",
        descr: "This trap is sent upon completion of a UPS diagnostic test"
    },
    {
        oid: "1.3.6.1.2.1.33.2.3",
        name: "upsTrapAlarmEntryAdded",
        descr: "This trap is sent each time an alarm is inserted into to the alarm table"
    },
    {
        oid: "1.3.6.1.2.1.33.2.4",
        name: "upsTrapAlarmEntryRemoved",
        descr: "This trap is sent each time an alarm is removed from the alarm table"
    },
    {
        oid: "1.3.6.1.2.1.33.3.1.1",
        name: "upsSubsetCompliance",
        descr: "The compliance statement for UPSs that only support the two-contact communication protocol"
    },
    {
        oid: "1.3.6.1.2.1.33.3.1.2",
        name: "upsBasicCompliance",
        descr: "The compliance statement for UPSs that support full-featured functions, such as control"
    },
    {
        oid: "1.3.6.1.2.1.33.3.1.3",
        name: "upsFullCompliance",
        descr: "The compliance statement for UPSs that support advanced full-featured functions"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.1",
        name: "upsSubsetGroups",
        descr: "Subset groups"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.1.1",
        name: "upsSubsetIdentGroup",
        descr: "The upsSubsetIdentGroup defines objects which are common across all UPSs which meet subset compliance"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.1.2",
        name: "upsSubsetBatteryGroup",
        descr: "The upsSubsetBatteryGroup defines the objects that are common to battery groups of two-contact UPSs"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.1.3",
        name: "upsSubsetInputGroup",
        descr: "The upsSubsetInputGroup defines the objects that are common to the Input groups of two-contact UPSs"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.1.4",
        name: "upsSubsetOutputGroup",
        descr: "The upsSubsetOutputGroup defines the objects that are common to the Output groups of two-contact UPSs"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.1.6",
        name: "upsSubsetAlarmGroup",
        descr: "The upsSubsetAlarmGroup defines the objects that are common to the Alarm groups of two-contact UPSs"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.1.8",
        name: "upsSubsetControlGroup",
        descr: "The upsSubsetControlGroup defines the objects that are common to the Control groups of two-contact UPSs"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.1.9",
        name: "upsSubsetConfigGroup",
        descr: "The upsSubsetConfigGroup defines the objects that are common to the Config groups of two-contact UPSs"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.2.1",
        name: "upsBasicIdentGroup",
        descr: "The upsBasicIdentGroup defines objects which are common to the Ident group of compliant UPSs which support basic functions"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.2.2",
        name: "upsBasicBatteryGroup",
        descr: "The upsBasicBatteryGroup defines the objects that are common to the battery groups of compliant UPSs which support basic functions"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.2.3",
        name: "upsBasicInputGroup",
        descr: "The upsBasicInputGroup defines the objects that are common to the Input groups of compliant UPSs which support basic functions"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.2.4",
        name: "upsBasicOutputGroup",
        descr: "The upsBasicOutputGroup defines the objects that are common to the Output groups of compliant UPSs which support basic functions"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.2.5",
        name: "upsBasicBypassGroup",
        descr: "The upsBasicBypassGroup defines the objects that are common to the Bypass groups of compliant UPSs which support basic functions"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.2.6",
        name: "upsBasicAlarmGroup",
        descr: "The upsBasicAlarmGroup defines the objects that are common to the Alarm groups of compliant UPSs which support basic functions"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.2.7",
        name: "upsBasicTestGroup",
        descr: "The upsBasicTestGroup defines the objects that are common to the Test groups of compliant UPSs which support basic functions"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.2.8",
        name: "upsBasicControlGroup",
        descr: "The upsBasicControlGroup defines the objects that are common to the Control groups of compliant UPSs which support basic functions"
    }, {
        oid: "1.3.6.1.2.1.33.3.2.2.9",
        name: "upsBasicConfigGroup",
        descr: "The upsBasicConfigGroup defines the objects that are common to the Config groups of UPSs which support basic functions"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.3.1",
        name: "upsFullIdentGroup",
        descr: "The upsFullIdentGroup defines objects which are common to the Ident group of fully compliant UPSs"
    }, {
        oid: "1.3.6.1.2.1.33.3.2.3.2",
        name: "upsFullBatteryGroup",
        descr: "The upsFullBatteryGroup defines the objects that are common to the battery groups of fully compliant UPSs"
    }, {
        oid: "1.3.6.1.2.1.33.3.2.3.3",
        name: "upsFullInputGroup",
        descr: "The upsFullInputGroup defines the objects that are common to the Input groups of fully compliant UPSs"
    }, {
        oid: "1.3.6.1.2.1.33.3.2.3.4",
        name: "upsFullOutputGroup",
        descr: "The upsFullOutputGroup defines the objects that are common to the Output groups of fully compliant UPSs"
    }, {
        oid: "1.3.6.1.2.1.33.3.2.3.5",
        name: "upsFullBypassGroup",
        descr: "The upsFullBypassGroup defines the objects that are common to the Bypass groups of fully compliant UPSs"
    }, {
        oid: "1.3.6.1.2.1.33.3.2.3.6",
        name: "upsFullAlarmGroup",
        descr: "The upsFullAlarmGroup defines the objects that are common to the Alarm groups of fully compliant UPSs"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.3.7",
        name: "upsFullTestGroup",
        descr: "The upsFullTestGroup defines the objects that are common to the Test groups of fully compliant UPSs"
    },
    {
        oid: "1.3.6.1.2.1.33.3.2.3.8",
        name: "upsFullControlGroup",
        descr: "The upsFullControlGroup defines the objects that are common to the Control groups of fully compliant UPSs"
    }, {
        oid: "1.3.6.1.2.1.33.3.2.3.9",
        name: "upsFullConfigGroup",
        descr: "The upsFullConfigGroup defines the objects that are common to the Config groups of fully compliant UPSs"
    }
]