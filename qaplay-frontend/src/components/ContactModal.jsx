import React from 'react';
import { X, Mail, Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div classNameName="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md relative transform transition-all duration-300 scale-100 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Vamos Conversar!</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
          Estou sempre aberto a novas oportunidades e colaborações. Conecte-se comigo:
        </p>
        <div className="space-y-4">
          <a
            href="mailto:nilson.brites@gmail.com"
            className="flex items-center justify-center p-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            <Mail className="w-5 h-5 mr-3" />
            nilson.brites@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/nilsondasilvabrites/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Linkedin className="w-5 h-5 mr-3" />
            LinkedIn
          </a>
          <a
            href="https://github.com/nilrd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors"
          >
            <Github className="w-5 h-5 mr-3" />
            GitHub
          </a>
          <a
            href="https://instagram.com/nilsbrites"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition-colors"
          >
            <Instagram className="w-5 h-5 mr-3" />
            Instagram
          </a>
          <a
            href="https://wa.me/5511940825120"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;


