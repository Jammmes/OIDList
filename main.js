var deviceSpecific = {
  printers: [],
  routers: ['1.3.6.1.2.1.1.7', '1.3.6.1.2.1.4.1', '1.3.6.1.2.1.15.3', ],
  switches: [],
  hosts: [],
  UPC: ['1.3.6.1.2.1.33']
}



/*
ROUTERS:
1.3.6.1.2.1.1.7 - sysServices
1.3.6.1.2.1.4.1 - ipForwarding
1.3.6.1.2.1.15.3 - bgpPeerTable 
1.3.6.1.2.1.14.2- ospfAreaTable
1.3.6.1.2.1.14.4 - ospfLsdbTabl
1.3.6.1.3.96.1.3 - mplsInSegmentTable
1.3.6.1.3.96.1.6 - mplsOutSegmentTable
1.3.6.1.3.118.1.2.2 - mplsVpnVrfTable 

SWITCHES:

1.3.6.1.2.1.17.0 - dot1dNotifications (Notifications)
1.3.6.1.2.1.17.1 - dot1dBase ("dot1dBase" group)
1.3.6.1.2.1.17.2 - dot1dStp ("dot1dStp" group)
1.3.6.1.2.1.17.3 - dot1dSr ("dot1dSr" group )
1.3.6.1.2.1.17.4 - dot1dTp ("dot1dTp" group )
1.3.6.1.2.1.17.5 - dot1dStatic ("dot1dStatic" group)
1.3.6.1.2.1.17.6 - pBridgeMIB (The Bridge MIB Extension module)
1.3.6.1.2.1.17.7 - qBridgeMIB (The VLAN Bridge MIB module)
1.3.6.1.2.1.17.8 - dot1dConformance (Conformance )
1.3.6.1.2.1.17.10 - dot1dPortPair ("dot1dPortPair" group)

HOSTS:
1.3.6.1.2.1.25.1 - hrSystem (System)
1.3.6.1.2.1.25.2 - hrStorage (Storage)
1.3.6.1.2.1.25.3 - hrDevice (Host resources device)
1.3.6.1.2.1.25.4 - hrSWRun (Host resources software run)
1.3.6.1.2.1.25.5 - hrSWRunPerf (Host resources software run performance)
1.3.6.1.2.1.25.6 - hrSWInstalled (Host resources software installed)
1.3.6.1.2.1.25.7 - hrMIBAdminInfo (Admin info )

PRINTERS:
1.3.6.1.2.1.43.2 - prtMIBConformance (Conformance information)
1.3.6.1.2.1.43.5 - prtGeneral (General printer group)
1.3.6.1.2.1.43.6 - prtCover (Cover table)
1.3.6.1.2.1.43.7 - prtLocalization (Localization table)
1.3.6.1.2.1.43.8 - prtInput (Input group)
1.3.6.1.2.1.43.9 - prtOutput (Output sub-units) 
1.3.6.1.2.1.43.10 - prtMarker (Marker group)
1.3.6.1.2.1.43.11 - prtMarkerSupplies (Marker supplies group)
1.3.6.1.2.1.43.12 - prtMarkerColorant (Marker colorant group) 
1.3.6.1.2.1.43.13 - prtMediaPath (Media path group) 
1.3.6.1.2.1.43.14 - prtChannel (Channel table) 
1.3.6.1.2.1.43.15 - prtInterpreter (Interpreter group) 
1.3.6.1.2.1.43.16 - prtConsoleDisplayBuffer (Display buffer table)
1.3.6.1.2.1.43.17 - prtConsoleLights (Console light table)
1.3.6.1.2.1.43.18 - prtAlert (Alerts group)
1.3.6.1.2.1.43.30 - finDevice (Finisher device group)
1.3.6.1.2.1.43.31 - finSupply (Finisher supply group)
1.3.6.1.2.1.43.31 - finSupplyMediaInput (Finisher supply, media input group)
1.3.6.1.2.1.43.32 - finDeviceAttribute (Finisher device attribute group)

UPC:
1.3.6.1.2.1.33.1 - upsObjects (Objects)
1.3.6.1.2.1.33.1.1.1 - upsIdentManufacturer (The name of the UPS manufacturer)

1.3.6.1.2.1.33.2 - upsTraps (Traps)
1.3.6.1.2.1.33.3 - upsConformance (Conformance)
*/