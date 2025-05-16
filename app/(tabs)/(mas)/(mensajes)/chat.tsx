import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface Message {
  id: string;
  text: string;
  fromUser: boolean;
  time: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hola, ¿cómo estás?', fromUser: false, time: '10:30' },
    { id: '2', text: '¡Hola! Todo bien, ¿y tú?', fromUser: true, time: '10:31' },
    { id: '3', text: 'Muy bien, tengo un problema en mi casa me podrias ayudar?', fromUser: false, time: '10:32' },
    { id: '4', text: '¡Claro! ¿Qué problema tienes?', fromUser: true, time: '10:33' },
    { id: '5', text: 'Tengo un problema con mi computadora', fromUser: false, time: '10:34' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      fromUser: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={[
      styles.messageWrapper,
      item.fromUser ? styles.userMessageWrapper : styles.otherMessageWrapper
    ]}>
      {!item.fromUser && (
        <View style={styles.avatarContainer}>
          <Image 
            source={require('../../../../assets/images/perfil.png')}
            style={styles.avatar}
          />
        </View>
      )}
      <View style={[
        styles.messageContainer,
        item.fromUser ? styles.userMessageContainer : styles.otherMessageContainer
      ]}>
        {item.fromUser ? (
          <LinearGradient
            colors={['#3B82F6', '#2563EB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientBubble}
          >
            <Text style={styles.userMessageText}>{item.text}</Text>
            <View style={styles.messageFooter}>
              <Text style={styles.userMessageTime}>{item.time}</Text>
              <Ionicons name="checkmark-done" size={14} color="#E2E8F0" style={styles.messageStatus} />
            </View>
          </LinearGradient>
        ) : (
          <View style={styles.otherBubble}>
            <Text style={styles.otherMessageText}>{item.text}</Text>
            <View style={styles.messageFooter}>
              <Text style={styles.otherMessageTime}>{item.time}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messageList}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe un mensaje..."
          placeholderTextColor="#94A3B8"
          value={newMessage}
          onChangeText={setNewMessage}
          multiline
        />
        <TouchableOpacity 
          style={[styles.sendButton, !newMessage.trim() && styles.sendButtonDisabled]} 
          onPress={sendMessage}
          disabled={!newMessage.trim()}
        >
          <Ionicons name="send" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  messageList: {
    padding: 16,
  },
  messageWrapper: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  userMessageWrapper: {
    justifyContent: 'flex-end',
  },
  otherMessageWrapper: {
    justifyContent: 'flex-start',
  },
  avatarContainer: {
    marginRight: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  messageContainer: {
    maxWidth: '75%',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
  },
  otherMessageContainer: {
    alignSelf: 'flex-start',
  },
  gradientBubble: {
    padding: 12,
    borderRadius: 20,
    borderBottomRightRadius: 4,
  },
  otherBubble: {
    padding: 12,
    borderRadius: 20,
    borderBottomLeftRadius: 4,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  userMessageText: {
    fontSize: 15,
    lineHeight: 20,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  otherMessageText: {
    fontSize: 15,
    lineHeight: 20,
    color: '#1E293B',
    marginBottom: 4,
  },
  messageFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 4,
  },
  userMessageTime: {
    fontSize: 11,
    color: '#E2E8F0',
  },
  otherMessageTime: {
    fontSize: 11,
    color: '#64748B',
  },
  messageStatus: {
    marginLeft: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    alignItems: 'flex-end',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  input: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingRight: 16,
    fontSize: 15,
    color: '#1E293B',
    maxHeight: 100,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  sendButtonDisabled: {
    backgroundColor: '#CBD5E1',
  },
});
