
import 'dart:io';
import 'dart:async';
import 'dart:isolate';

void printMessage(message){
  print("Mensagem do isolado: $message");
}
void main() async { 
  final receivePort = ReceivePort();
  final  isolate = await Isolate.spawn(printMessage, "Kailane");

  await receivePort.first;

  receivePort.close();
  isolate.kill();
}