import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Accessibility, 
  Eye, 
  EyeOff, 
  Type, 
  Contrast, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  MousePointer,
  Volume2,
  Keyboard,
  X,
  Settings
} from "lucide-react";

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 100,
    contrast: 'normal',
    cursorSize: 'normal',
    highlightLinks: false,
    highlightHeadings: false,
    hideImages: false,
    readingGuide: false,
    animations: true,
    soundEffects: false
  });

  // Apply accessibility settings
  useEffect(() => {
    const root = document.documentElement;
    
    // Font size
    root.style.setProperty('--accessibility-font-scale', `${settings.fontSize / 100}`);
    
    // High contrast
    if (settings.contrast === 'high') {
      document.body.classList.add('high-contrast');
    } else if (settings.contrast === 'inverted') {
      document.body.classList.add('inverted-contrast');
    } else {
      document.body.classList.remove('high-contrast', 'inverted-contrast');
    }
    
    // Cursor size
    if (settings.cursorSize === 'large') {
      document.body.classList.add('large-cursor');
    } else if (settings.cursorSize === 'extra-large') {
      document.body.classList.add('extra-large-cursor');
    } else {
      document.body.classList.remove('large-cursor', 'extra-large-cursor');
    }
    
    // Highlight links
    if (settings.highlightLinks) {
      document.body.classList.add('highlight-links');
    } else {
      document.body.classList.remove('highlight-links');
    }
    
    // Highlight headings
    if (settings.highlightHeadings) {
      document.body.classList.add('highlight-headings');
    } else {
      document.body.classList.remove('highlight-headings');
    }
    
    // Hide images
    if (settings.hideImages) {
      document.body.classList.add('hide-images');
    } else {
      document.body.classList.remove('hide-images');
    }
    
    // Reading guide
    if (settings.readingGuide) {
      document.body.classList.add('reading-guide');
    } else {
      document.body.classList.remove('reading-guide');
    }
    
    // Animations
    if (!settings.animations) {
      document.body.classList.add('no-animations');
    } else {
      document.body.classList.remove('no-animations');
    }
    
  }, [settings]);

  const updateSetting = (key: string, value: string | number | boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings({
      fontSize: 100,
      contrast: 'normal',
      cursorSize: 'normal',
      highlightLinks: false,
      highlightHeadings: false,
      hideImages: false,
      readingGuide: false,
      animations: true,
      soundEffects: false
    });
  };

  const increaseFontSize = () => {
    const newSize = Math.min(settings.fontSize + 10, 150);
    updateSetting('fontSize', newSize);
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(settings.fontSize - 10, 80);
    updateSetting('fontSize', newSize);
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 right-4 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="פתח תפריט נגישות"
        title="תפריט נגישות"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <Card 
            className="fixed top-20 right-4 w-96 max-w-[90vw] max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader className="bg-blue-600 text-white rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <Accessibility className="w-5 h-5" />
                  תפריט נגישות
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-blue-700 p-1 h-auto"
                  aria-label="סגור תפריט נגישות"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="p-6 space-y-6">
              {/* Font Size Controls */}
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  גודל טקסט: {settings.fontSize}%
                </h3>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    onClick={decreaseFontSize}
                    disabled={settings.fontSize <= 80}
                    aria-label="הקטן טקסט"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={increaseFontSize}
                    disabled={settings.fontSize >= 150}
                    aria-label="הגדל טקסט"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Contrast Options */}
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Contrast className="w-4 h-4" />
                  ניגודיות
                </h3>
                <div className="space-y-2">
                  <Button
                    variant={settings.contrast === 'normal' ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => updateSetting('contrast', 'normal')}
                  >
                    רגיל
                  </Button>
                  <Button
                    variant={settings.contrast === 'high' ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => updateSetting('contrast', 'high')}
                  >
                    ניגודיות גבוהה
                  </Button>
                  <Button
                    variant={settings.contrast === 'inverted' ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => updateSetting('contrast', 'inverted')}
                  >
                    ניגודיות הפוכה
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Cursor Size */}
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <MousePointer className="w-4 h-4" />
                  גודל סמן עכבר
                </h3>
                <div className="space-y-2">
                  <Button
                    variant={settings.cursorSize === 'normal' ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => updateSetting('cursorSize', 'normal')}
                  >
                    רגיל
                  </Button>
                  <Button
                    variant={settings.cursorSize === 'large' ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => updateSetting('cursorSize', 'large')}
                  >
                    גדול
                  </Button>
                  <Button
                    variant={settings.cursorSize === 'extra-large' ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => updateSetting('cursorSize', 'extra-large')}
                  >
                    גדול מאוד
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Visual Helpers */}
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  עזרים חזותיים
                </h3>
                <div className="space-y-2">
                  <Button
                    variant={settings.highlightLinks ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => updateSetting('highlightLinks', !settings.highlightLinks)}
                  >
                    הדגש קישורים
                  </Button>
                  <Button
                    variant={settings.highlightHeadings ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => updateSetting('highlightHeadings', !settings.highlightHeadings)}
                  >
                    הדגש כותרות
                  </Button>
                  <Button
                    variant={settings.hideImages ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => updateSetting('hideImages', !settings.hideImages)}
                  >
                    <EyeOff className="w-4 h-4 ml-2" />
                    הסתר תמונות
                  </Button>
                  <Button
                    variant={settings.readingGuide ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => updateSetting('readingGuide', !settings.readingGuide)}
                  >
                    מדריך קריאה
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Motion & Sound */}
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  תנועה וצלילים
                </h3>
                <div className="space-y-2">
                  <Button
                    variant={!settings.animations ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => updateSetting('animations', !settings.animations)}
                  >
                    בטל אנימציות
                  </Button>
                  <Button
                    variant={settings.soundEffects ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => updateSetting('soundEffects', !settings.soundEffects)}
                  >
                    <Volume2 className="w-4 h-4 ml-2" />
                    אפקטי קול
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Keyboard Navigation Info */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Keyboard className="w-4 h-4" />
                  ניווט במקלדת
                </h3>
                <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <p><kbd className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Tab</kbd> - מעבר בין אלמנטים</p>
                  <p><kbd className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Enter</kbd> - הפעלת קישור/כפתור</p>
                  <p><kbd className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Esc</kbd> - סגירת תפריטים</p>
                  <p><kbd className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Alt + 1</kbd> - מעבר לתוכן הראשי</p>
                </div>
              </div>

              {/* Reset Button */}
              <Button 
                onClick={resetSettings}
                variant="outline"
                className="w-full"
              >
                <RotateCcw className="w-4 h-4 ml-2" />
                איפוס הגדרות
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default AccessibilityMenu;
