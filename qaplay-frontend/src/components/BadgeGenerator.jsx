import React, { useRef, useEffect } from 'react';
import { Download, Share2 } from 'lucide-react';

const BadgeGenerator = ({ result, userName = 'QA Professional', onClose }) => {
  const canvasRef = useRef(null);
  const badgeImageRef = useRef(null);

  useEffect(() => {
    generateBadge();
  }, [result, userName]);

  const generateBadge = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = 800;
    const height = 600;
    
    canvas.width = width;
    canvas.height = height;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    if (result.badge.color === 'gold') {
      gradient.addColorStop(0, '#FFD700');
      gradient.addColorStop(0.5, '#FFA500');
      gradient.addColorStop(1, '#FF8C00');
    } else if (result.badge.color === 'silver') {
      gradient.addColorStop(0, '#C0C0C0');
      gradient.addColorStop(0.5, '#A8A8A8');
      gradient.addColorStop(1, '#808080');
    } else if (result.badge.color === 'bronze') {
      gradient.addColorStop(0, '#CD7F32');
      gradient.addColorStop(0.5, '#B87333');
      gradient.addColorStop(1, '#A0522D');
    } else if (result.badge.color === 'blue') {
      gradient.addColorStop(0, '#4F46E5');
      gradient.addColorStop(0.5, '#3B82F6');
      gradient.addColorStop(1, '#2563EB');
    } else {
      gradient.addColorStop(0, '#6B7280');
      gradient.addColorStop(0.5, '#4B5563');
      gradient.addColorStop(1, '#374151');
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Border
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, width - 40, height - 40);

    // Inner border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    // Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 48px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('QA PLAY CERTIFICATE', width / 2, 120);

    // Badge icon (emoji)
    ctx.font = '120px Arial, sans-serif';
    ctx.fillText(result.badge.icon, width / 2, 220);

    // Badge name
    ctx.font = 'bold 36px Arial, sans-serif';
    ctx.fillText(result.badge.name.toUpperCase(), width / 2, 280);

    // User name
    ctx.font = 'bold 32px Arial, sans-serif';
    ctx.fillText(`Awarded to: ${userName}`, width / 2, 340);

    // Category and level
    ctx.font = '24px Arial, sans-serif';
    ctx.fillText(`${result.category} - ${result.level}`, width / 2, 380);

    // Score details
    ctx.font = '20px Arial, sans-serif';
    ctx.fillText(`Score: ${result.score} points | ${result.correctAnswers}/${result.totalQuestions} correct (${result.percentage}%)`, width / 2, 420);

    // Date
    const date = new Date().toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    ctx.font = '18px Arial, sans-serif';
    ctx.fillText(`Completed on ${date}`, width / 2, 460);

    // Footer
    ctx.font = '16px Arial, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText('QA Play Training - Interactive Learning Platform', width / 2, 520);
    ctx.fillText('This certificate is for educational purposes and personal achievement recognition', width / 2, 545);

    // Convert canvas to image
    const imageData = canvas.toDataURL('image/png');
    if (badgeImageRef.current) {
      badgeImageRef.current.src = imageData;
    }
  };

  const downloadBadge = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `qa-play-badge-${result.category}-${result.level}-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const shareBadge = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      // Convert canvas to blob
      canvas.toBlob(async (blob) => {
        const file = new File([blob], `qa-play-badge-${result.category}-${result.level}.png`, {
          type: 'image/png'
        });

        const shareText = `🎯 Acabei de conquistar o badge ${result.badge.icon} ${result.badge.name} no QA Play!\n\n` +
                         `📊 ${result.category} - ${result.level}\n` +
                         `💯 ${result.score} pontos (${result.percentage}% de aproveitamento)\n\n` +
                         `#QAPlay #QualityAssurance #Testing #Badge`;

        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'Meu Badge QA Play',
            text: shareText,
            files: [file]
          });
        } else {
          // Fallback: copy text and download image
          await navigator.clipboard.writeText(shareText);
          downloadBadge();
          alert('Texto copiado para área de transferência e badge baixado!');
        }
      }, 'image/png');
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
      downloadBadge();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Seu Badge QA Play
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Parabéns! Você conquistou o badge <strong>{result.badge.name}</strong> em {result.category}!
            </p>
            
            {/* Badge Preview */}
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6 inline-block">
              <img
                ref={badgeImageRef}
                alt="Badge QA Play"
                className="max-w-full h-auto rounded-lg shadow-lg"
                style={{ maxWidth: '600px', maxHeight: '450px' }}
              />
            </div>

            {/* User Name Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nome para o certificado:
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => {
                  // This would need to be handled by parent component
                  // For now, we'll use the default name
                }}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Seu nome"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={downloadBadge}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Baixar Badge
              </button>
              <button
                onClick={shareBadge}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Compartilhar
              </button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              Este badge é para fins educacionais e reconhecimento pessoal de conquistas.
            </p>
          </div>
        </div>

        {/* Hidden canvas for badge generation */}
        <canvas
          ref={canvasRef}
          style={{ display: 'none' }}
          width={800}
          height={600}
        />
      </div>
    </div>
  );
};

export default BadgeGenerator;

