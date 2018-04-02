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

console.log(createList('routers', routers));



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
    ['1.3.6.1.2.1.33.1', 'upsObjects', 'Objects'],
    ['1.3.6.1.2.1.33.1.1.1', 'upsIdentManufacturer,The name of the UPS manufacturer'],
    ['1.3.6.1.2.1.33.2', 'upsTraps', 'Traps'],
    ['1.3.6.1.2.1.33.3', 'upsConformance', 'Conformance']
]