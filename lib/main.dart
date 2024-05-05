import 'package:assignment_8club/card1.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      darkTheme: ThemeData(
        // This is the theme of your application.
        //
        // TRY THIS: Try running your application with "flutter run". You'll see
        // the application has a purple toolbar. Then, without quitting the app,
        // try changing the seedColor in the colorScheme below to Colors.green
        // and then invoke "hot reload" (save your changes or press the "hot
        // reload" button in a Flutter-supported IDE, or press "r" if you used
        // the command line to start the app).
        //
        // Notice that the counter didn't reset back to zero; the application
        // state is not lost during the reload. To reset the state, use hot
        // restart instead.
        //
        // This works for code too, not just values: Most code changes can be
        // tested with just a hot reload.
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.black,brightness: Brightness.dark),
        brightness: Brightness.dark,
        useMaterial3: true,
      ),
      themeMode: ThemeMode.dark,
      home: MyHomePage(),
    );
  }
}

/*class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    const List<Widget> children = [
      Card1(),
      Card1(),
      Card1(),
    ];
    return Scaffold(
        body: Container(
          padding: EdgeInsets.only(top: 16,bottom: 16),
          color: Colors.black,
          child: PageView.builder(scrollDirection: Axis.horizontal,
              physics: const PageScrollPhysics(), // this for snapping
              itemCount: children.length,
              itemBuilder: (_, index) => children[index]),
        )
    );
  }
}*/

class MyHomePage extends StatelessWidget {
  final PageController _controller = PageController(viewportFraction: 0.8);

   late List<Widget> children;

   MyHomePage(){
     children = [
      card1((){
        _controller.hasClients
            ? _controller.nextPage(
                duration: Duration(milliseconds: 200), curve: Curves.linear)
            : {};
      }),
       card1((){
         _controller.hasClients
             ? _controller.nextPage(
             duration: Duration(milliseconds: 200), curve: Curves.linear)
             : {};
       }),
       card1((){
         _controller.hasClients
             ? _controller.nextPage(
             duration: Duration(milliseconds: 200), curve: Curves.linear)
             : {};
       }),     ];
   }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: Colors.black,
        child: Column(
          children: [
            SizedBox(height: 100,),
            Container(
              height: MediaQuery.of(context).size.height*0.8, // Ca
              color: Colors.black,// rd height
              child: PageView.builder(
                itemCount: 3,
                controller: _controller,
                itemBuilder: (context, index) {
                  return ListenableBuilder(
                    listenable: _controller,
                    builder: (context, child) {
                      double factor = 1;
                      if (_controller.position.hasContentDimensions) {
                        factor = 1 - (_controller.page! - index).abs();
                      }

                      return Center(
                        child: Container(
                          decoration: const BoxDecoration(
                              gradient: RadialGradient(
                                  radius: 0.65,
                                  colors: [
                                    Color(0xFFFE5BDB),
                                    Colors.transparent,
                                  ],
                                  center: Alignment(0.1,0.1)
                              )),
                          child: Container(
                            decoration: const BoxDecoration(
                                gradient: RadialGradient(
                                  radius: 0.5,
                                  colors: [
                                    Color(0xFF5B62FF),
                                    Colors.transparent,
                                  ],
                                  center: Alignment(-0.1,-0.1)
                                )),
                            child: Container(
                              height: MediaQuery.of(context).size.height*0.7 + (factor * (MediaQuery.of(context).size.height*0.1)),
                              width: MediaQuery.of(context).size.width*0.8,
                              color: const Color(0x0cFFFFFF),
                              child: children[index]
                            ),
                          ),
                        ),
                      );
                    },
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

