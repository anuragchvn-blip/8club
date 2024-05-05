import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

Widget Card1() {
  return Card(
    elevation: 1,
    color: Color(0x0cFFFFFF),
    surfaceTintColor: Colors.transparent,
    borderOnForeground: false,
    child: Padding(
      padding: EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(height: 16.0,),
          Text('Type of Hotspot:',style: TextStyle(fontSize: 18),),
          SizedBox(height: 16.0,),
          Row(
            children: [
              Expanded(
                child: Card(
                  elevation: 0,
                  color: Color(0x0cFFFFFF),
                  surfaceTintColor: Colors.transparent,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(6)),
                  child: Container(
                      padding: EdgeInsets.all(8.0),
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start,children: [
                        Icon(
                          Icons.add_chart_outlined,
                          color: Colors.white,
                          size: 24.0,
                          semanticLabel:
                              'Text to announce in accessibility modes',
                        ),
                        SizedBox(height: 8,),
                        Text("Brunch")
                      ])),
                ),
              ),
              const SizedBox(width: 8.0),
              Expanded(
                child: Card(
                  elevation: 0,
                  color: Color(0x0cFFFFFF),
                  surfaceTintColor: Colors.transparent,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(6)),
                  child: Container(
                      padding: EdgeInsets.all(8.0), child: Column(crossAxisAlignment: CrossAxisAlignment.start,children: [
                    Icon(
                      Icons.add_chart_outlined,
                      color: Colors.white,
                      size: 24.0,
                      semanticLabel:
                      'Text to announce in accessibility modes',
                    ),
                    SizedBox(height: 8,),
                    Text("Brunch")
                  ])),
                ),
              ),
            ],
          ),
          Row(
            children: [
              Expanded(
                child: Card(
                  elevation: 0,
                  color: Color(0x0cFFFFFF),
                  surfaceTintColor: Colors.transparent,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(6)),
                  child: Container(
                      padding: EdgeInsets.all(8.0), child: Column(crossAxisAlignment: CrossAxisAlignment.start,children: [
                    Icon(
                      Icons.add_chart_outlined,
                      color: Colors.white,
                      size: 24.0,
                      semanticLabel:
                      'Text to announce in accessibility modes',
                    ),
                    SizedBox(height: 8,),
                    Text("Brunch")
                  ])),
                ),
              ),
              const SizedBox(width: 8.0),
              Expanded(
                child: Card(
                  elevation: 0,
                  color: Color(0x0cFFFFFF),
                  surfaceTintColor: Colors.transparent,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(6)),
                  child: Container(
                      padding: EdgeInsets.all(8.0), child: Column(crossAxisAlignment: CrossAxisAlignment.start,children: [
                    Icon(
                      Icons.add_chart_outlined,
                      color: Colors.white,
                      size: 24.0,
                      semanticLabel:
                      'Text to announce in accessibility modes',
                    ),
                    SizedBox(height: 8,),
                    Text("Brunch")
                  ])),
                ),
              ),
            ],
          ),
          Row(
            children: [
              Expanded(
                child: Card(
                  elevation: 0,
                  color: Color(0x0cFFFFFF),
                  surfaceTintColor: Colors.transparent,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(6)),
                  child: Container(
                      padding: EdgeInsets.all(8.0), child: Column(crossAxisAlignment: CrossAxisAlignment.start,children: [
                    Icon(
                      Icons.add_chart_outlined,
                      color: Colors.white,
                      size: 24.0,
                      semanticLabel:
                      'Text to announce in accessibility modes',
                    ),
                    SizedBox(height: 8,),
                    Text("Brunch")
                  ])),
                ),
              ),
              const SizedBox(width: 8.0),
              Expanded(
                child: Card(
                  elevation: 0,
                  color: Color(0x0cFFFFFF),
                  surfaceTintColor: Colors.transparent,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(6)),
                  child: Container(
                      padding: EdgeInsets.all(8.0), child: Column(crossAxisAlignment: CrossAxisAlignment.start,children: [
                    Icon(
                      Icons.add_chart_outlined,
                      color: Colors.white,
                      size: 24.0,
                      semanticLabel:
                      'Text to announce in accessibility modes',
                    ),
                    SizedBox(height: 8,),
                    Text("Brunch")
                  ])),
                ),
              ),
            ],
          ),
          Row(
            children: [
              Expanded(
                child: Card(
                  elevation: 0,
                  color: Color(0x0cFFFFFF),
                  surfaceTintColor: Colors.transparent,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(6)),
                  child: Container(
                      padding: EdgeInsets.all(8.0), child: Column(crossAxisAlignment: CrossAxisAlignment.start,children: [
                    Icon(
                      Icons.add_chart_outlined,
                      color: Colors.white,
                      size: 24.0,
                      semanticLabel:
                      'Text to announce in accessibility modes',
                    ),
                    SizedBox(height: 8,),
                    Text("Brunch")
                  ])),
                ),
              ),
              const SizedBox(width: 8.0),
              Expanded(
                child: Card(
                  elevation: 0,
                  color: Color(0x0cFFFFFF),
                  surfaceTintColor: Colors.transparent,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(6)),
                  child: Container(
                      padding: EdgeInsets.all(8.0), child: Column(crossAxisAlignment: CrossAxisAlignment.start,children: [
                    Icon(
                      Icons.add_chart_outlined,
                      color: Colors.white,
                      size: 24.0,
                      semanticLabel:
                      'Text to announce in accessibility modes',
                    ),
                    SizedBox(height: 8,),
                    Text("Brunch")
                  ])),
                ),
              ),
            ],
          ),
        ],
      ),
    ),
  );
}
/*
class Card1 extends StatelessWidget {
  const Card1({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {

  }
}*/
