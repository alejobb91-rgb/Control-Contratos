import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { createContract } from '../services/api';

export default function ContractForm({ onCreated, onCancel }) {
  const [nombre, setNombre] = useState('');
  const [cliente, setCliente] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [monto, setMonto] = useState('');
  const [estado, setEstado] = useState('');
  const [notas, setNotas] = useState('');

  const handleSubmit = async () => {
    const contract = { nombre, cliente, fechaInicio, fechaFin, monto, estado, notas };
    const newContract = await createContract(contract);
    onCreated(newContract);
  };

  return (
    <View>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput placeholder="Cliente" value={cliente} onChangeText={setCliente} />
      <TextInput placeholder="Fecha Inicio (YYYY-MM-DD)" value={fechaInicio} onChangeText={setFechaInicio} />
      <TextInput placeholder="Fecha Fin (YYYY-MM-DD)" value={fechaFin} onChangeText={setFechaFin} />
      <TextInput placeholder="Monto" value={monto} onChangeText={setMonto} keyboardType="numeric" />
      <TextInput placeholder="Estado" value={estado} onChangeText={setEstado} />
      <TextInput placeholder="Notas" value={notas} onChangeText={setNotas} />
      <Button title="Guardar" onPress={handleSubmit} />
      <Button title="Cancelar" onPress={onCancel} />
    </View>
  );
}