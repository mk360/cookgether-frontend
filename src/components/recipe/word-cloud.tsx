import React, { useMemo } from 'react';

interface WordData {
  word: string;
  weight: number;
}

interface ProcessedWord extends WordData {
  x: number;
  y: number;
  fontSize: number;
  color: string;
  width: number;
  height: number;
}

interface Position {
  x: number;
  y: number;
}

interface WordCloudProps {
  words: WordData[];
  width?: number;
  height?: number;
}

export const WordCloud: React.FC<WordCloudProps> = ({ words, width = 200, height = 200 }) => {
  const processedWords = (): ProcessedWord[] => {    
    const placedWords: ProcessedWord[] = [];
    const center: Position = { x: width / 2, y: height / 2 };

    if (!words.length) {
        placedWords.push({
            word: "Pas de donnée disponible actuellement",
            weight: 50,
            x: 10,
            y: center.y,
            fontSize: 16,
            width,
            height: 24,
            color: "#000"
        });
    } else {
        // Sort by weight descending to place important words first
        const sortedWords: WordData[] = [...words].sort((a, b) => b.weight - a.weight);
        sortedWords.forEach((wordData: WordData, index: number) => {
        const fontSize: number = Math.max(12, (wordData.weight / 100) * 48 + 12); // 12px to 60px
        const color: string = getColorByWeight(wordData.weight);
        
        // Estimate text dimensions (rough approximation)
        const textWidth: number = wordData.word.length * fontSize * 0.6;
        const textHeight: number = fontSize;
        
        const position: Position = findNonOverlappingPosition(
            placedWords,
            textWidth,
            textHeight,
            center,
            width,
            height
        );
        
        placedWords.push({
            ...wordData,
            x: position.x,
            y: position.y,
            fontSize,
            color,
            width: textWidth,
            height: textHeight
        });
        });
    }
    
    return placedWords;
  };
  
  // Generate color based on weight
  function getColorByWeight(weight: number): string {
    const colors: string[] = [
      '#8B5CF6', // Purple
      '#06B6D4', // Cyan
      '#10B981', // Emerald
      '#F59E0B', // Amber
      '#EF4444', // Red
      '#EC4899', // Pink
      '#6366F1', // Indigo
      '#84CC16', // Lime
    ];
    
    // Higher weights get more vibrant colors
    if (weight > 80) return colors[0];
    if (weight > 60) return colors[1];
    if (weight > 40) return colors[2];
    if (weight > 30) return colors[3];
    if (weight > 20) return colors[4];
    if (weight > 10) return colors[5];
    if (weight > 5) return colors[6];
    return colors[7];
  }
  
  // Simple spiral placement algorithm
  function findNonOverlappingPosition(
    placedWords: ProcessedWord[], 
    textWidth: number, 
    textHeight: number, 
    center: Position, 
    canvasWidth: number, 
    canvasHeight: number
  ): Position {
    const padding: number = 4;
    
    // Try center first
    let x: number = center.x - textWidth / 2;
    let y: number = center.y + textHeight / 4;
    
    if (!hasOverlap(x, y, textWidth, textHeight, placedWords, padding) && 
        isWithinBounds(x, y, textWidth, textHeight, canvasWidth, canvasHeight)) {
      return { x, y };
    }
    
    // Spiral outward
    let angle: number = 0;
    let radius: number = 20;
    const angleStep: number = 0.5;
    const radiusStep: number = 2;
    const maxRadius: number = Math.min(canvasWidth, canvasHeight) / 3;
    
    while (radius < maxRadius) {
      x = center.x + Math.cos(angle) * radius - textWidth / 2;
      y = center.y + Math.sin(angle) * radius + textHeight / 4;
      
      if (!hasOverlap(x, y, textWidth, textHeight, placedWords, padding) && 
          isWithinBounds(x, y, textWidth, textHeight, canvasWidth, canvasHeight)) {
        return { x, y };
      }
      
      angle += angleStep;
      if (angle > Math.PI * 2) {
        angle = 0;
        radius += radiusStep;
      }
    }
    
    // Fallback to random position if spiral fails
    return {
      x: Math.random() * (canvasWidth - textWidth),
      y: Math.random() * (canvasHeight - textHeight)
    };
  }
  
  function hasOverlap(
    x: number, 
    y: number, 
    width: number, 
    height: number, 
    placedWords: ProcessedWord[], 
    padding: number
  ): boolean {
    return placedWords.some((word: ProcessedWord) => {
      return !(x > word.x + word.width + padding || 
               x + width + padding < word.x || 
               y > word.y + word.height + padding || 
               y + height + padding < word.y);
    });
  }
  
  function isWithinBounds(
    x: number, 
    y: number, 
    width: number, 
    height: number, 
    canvasWidth: number, 
    canvasHeight: number
  ): boolean {
    return x >= 0 && y >= 0 && x + width <= canvasWidth && y + height <= canvasHeight;
  }
  
  return (
    <div className="w-full h-full flex items-center justify-center rounded-lg">
      <svg width={width} height={height} className="border border-gray-200 rounded-lg bg-white">
        {processedWords().map((word: ProcessedWord, index: number) => (
          <text
            key={`${word.word}-${index}`}
            x={word.x}
            y={word.y}
            fontSize={word.fontSize}
            fill={word.color}
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight={word.weight > 70 ? 'bold' : word.weight > 40 ? '600' : 'normal'}
            className="select-none cursor-pointer hover:opacity-75 transition-opacity"
            style={{
              textAnchor: 'start',
              dominantBaseline: 'middle'
            }}
          >
            {word.word}
          </text>
        ))}
      </svg>
    </div>
  );
};

// Example usage with sample data

