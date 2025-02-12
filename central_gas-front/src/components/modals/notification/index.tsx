import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import {CheckCircle, MailIcon, CloudOff, CircleX } from 'lucide-react-native';
import { styles } from './styles';


type NotificationProps = {
    visible: boolean;
    onClose: () => void;
    message: string;
    type: 'envio' | 'error' |'sucesso'|"conection";
}

export default function NotificationModal({ visible, onClose, message, type }: NotificationProps){
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    {/* Ícone de Notificação */}
                    {type == "envio" ? <MailIcon size={32} color="#4CAF50" /> :
                        type == "error" ? <CircleX size={32} color="#FF3B30" /> :
                            type == "sucesso" ? <CheckCircle size={32} color="#4CAF50" />
                                : <CloudOff size={32} color="#FF3B30" />}


                    {/* Texto da Notificação */}
                    <Text style={styles.messageText}>{message}</Text>

                    {/* Botão de Fechar */}
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};