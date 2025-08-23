import React, { useRef, useEffect, useState } from 'react';
import { Download, Share2, Trophy, Star, Target } from 'lucide-react';

const BadgeGenerator = ({ userInfo, quizResult, category, onClose }) => {
  const canvasRef = useRef(null);
  const [badgeUrl, setBadgeUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    generateBadge();
  }, []);

  const generateBadge = async () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Configurar canvas
    canvas.width = 800;
    canvas.height = 600;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#4F46E5'); // indigo-600
    gradient.addColorStop(1, '#06B6D4'); // cyan-500
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Badge border
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    // Inner border
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
    
    // QA Play Logo/Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('QA PLAY', canvas.width / 2, 120);
    
    // Subtitle
    ctx.font = '24px Arial';
    ctx.fillStyle = '#E5E7EB';
    ctx.fillText('Certificado de Conclusão', canvas.width / 2, 160);
    
    // Category
    ctx.font = 'bold 32px Arial';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(category.title, canvas.width / 2, 220);
    
    // User name
    ctx.font = 'bold 36px Arial';
    ctx.fillStyle = '#FCD34D'; // yellow-300
    ctx.fillText(userInfo.name, canvas.width / 2, 280);
    
    // Score section
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '24px Arial';
    ctx.fillText('Pontuação Final', canvas.width / 2, 340);
    
    ctx.font = 'bold 48px Arial';
    ctx.fillStyle = '#10B981'; // green-500
    ctx.fillText(`${quizResult.score} pontos`, canvas.width / 2, 390);
    
    // Accuracy
    ctx.font = '20px Arial';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(`Taxa de Acerto: ${quizResult.accuracy}%`, canvas.width / 2, 430);
    
    // Date
    const currentDate = new Date().toLocaleDateString('pt-BR');
    ctx.font = '18px Arial';
    ctx.fillStyle = '#D1D5DB';
    ctx.fillText(`Concluído em ${currentDate}`, canvas.width / 2, 480);
    
    // Performance badge
    let performanceText = '';
    let performanceColor = '';
    
    if (quizResult.accuracy >= 90) {
      performanceText = '⭐ EXCELENTE ⭐';
      performanceColor = '#FCD34D';
    } else if (quizResult.accuracy >= 80) {
      performanceText = '🏆 MUITO BOM 🏆';
      performanceColor = '#10B981';
    } else if (quizResult.accuracy >= 70) {
      performanceText = '👍 BOM 👍';
      performanceColor = '#3B82F6';
    } else {
      performanceText = '📚 CONTINUE ESTUDANDO 📚';
      performanceColor = '#F59E0B';
    }
    
    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = performanceColor;
    ctx.fillText(performanceText, canvas.width / 2, 520);
    
    // Footer
    ctx.font = '14px Arial';
    ctx.fillStyle = '#9CA3AF';
    ctx.fillText('QA Play por Nilson Brites - Aprendizado Gamificado', canvas.width / 2, 560);
    
    // Converter canvas para URL
    const dataUrl = canvas.toDataURL('image/png', 1.0);
    setBadgeUrl(dataUrl);
    setIsGenerating(false);
  };

  const downloadBadge = () => {
    const link = document.createElement('a');
    link.download = `qaplay-badge-${userInfo.name.replace(/\s+/g, '-').toLowerCase()}-${category.id}.png`;
    link.href = badgeUrl;
    link.click();
  };

  const shareOnLinkedIn = () => {
    const text = `🏆 Acabei de completar o quiz "${category.title}" no QA Play!\n\n📊 Pontuação: ${quizResult.score} pontos\n🎯 Taxa de Acerto: ${quizResult.accuracy}%\n\n#QA #Testing #QualityAssurance #Aprendizado #QAPlay`;
    
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}&summary=${encodeURIComponent(text)}`;
    
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  const copyBadgeLink = async () => {
    try {
      // Criar um link temporário para o badge
      const badgeLink = `${window.location.origin}/badge?name=${encodeURIComponent(userInfo.name)}&category=${category.id}&score=${quizResult.score}&accuracy=${quizResult.accuracy}`;
      
      await navigator.clipboard.writeText(badgeLink);
      alert('Link do badge copiado para a área de transferência!');
    } catch (err) {
      console.error('Erro ao copiar link:', err);
      alert('Erro ao copiar link. Tente baixar o badge.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Parabéns, {userInfo.name}!
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Seu badge está pronto para compartilhar
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        {/* Badge Preview */}
        <div className="p-6">
          <div className="text-center mb-6">
            {isGenerating ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                <span className="ml-3 text-gray-600 dark:text-gray-300">Gerando seu badge...</span>
              </div>
            ) : (
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 inline-block">
                <canvas
                  ref={canvasRef}
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  style={{ maxWidth: '600px' }}
                />
              </div>
            )}
          </div>

          {/* Actions */}
          {!isGenerating && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={downloadBadge}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                Baixar Badge
              </button>
              
              <button
                onClick={shareOnLinkedIn}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Share2 className="w-5 h-5" />
                Compartilhar no LinkedIn
              </button>
              
              <button
                onClick={copyBadgeLink}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Target className="w-5 h-5" />
                Copiar Link
              </button>
            </div>
          )}

          {/* Stats Summary */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
              <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{quizResult.score}</div>
              <div className="text-sm text-green-600">Pontos</div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{quizResult.accuracy}%</div>
              <div className="text-sm text-blue-600">Taxa de Acerto</div>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center">
              <Trophy className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">{category.totalQuestions}</div>
              <div className="text-sm text-purple-600">Questões</div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Este badge é gerado para fins educacionais e de gamificação. Não constitui certificação oficial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeGenerator;

