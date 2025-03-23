
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Square, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [detectionCount, setDetectionCount] = useState(0);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const startProgress = () => {
    if (progressRef.current) clearInterval(progressRef.current);
    setIsPlaying(true);
    
    progressRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressRef.current!);
          setIsPlaying(false);
          return 100;
        }
        
        // Randomly increase detection count
        if (Math.random() > 0.9) {
          setDetectionCount(prev => prev + 1);
        }
        
        return prev + 0.5;
      });
    }, 100);
  };
  
  const stopProgress = () => {
    if (progressRef.current) {
      clearInterval(progressRef.current);
      setIsPlaying(false);
    }
  };
  
  const resetProgress = () => {
    stopProgress();
    setProgress(0);
    setDetectionCount(0);
  };
  
  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);
  
  const detectionLogs = [
    { time: "00:05", type: "Person detected", severity: "low" },
    { time: "00:12", type: "Unusual movement", severity: "medium" },
    { time: "00:27", type: "Restricted area access", severity: "high" },
    { time: "00:35", type: "Multiple persons", severity: "medium" },
    { time: "00:42", type: "Running detected", severity: "medium" },
    { time: "00:58", type: "Abandoned object", severity: "high" },
  ];
  
  return (
    <section id="demo" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="page-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold tracking-wider">
            Interactive Demo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See FrameGuardian in Action
          </h2>
          <p className="text-lg text-gray-600">
            Experience how our AI technology analyzes video content to detect abnormal events in various scenarios.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 glass-panel rounded-xl overflow-hidden border border-white/40 transition-all duration-200">
            <div className="aspect-video bg-gray-900 relative">
              {/* Demo video frame */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  {isPlaying ? (
                    <Pause size={32} className="text-white" />
                  ) : (
                    <Play size={32} className="text-white ml-1" />
                  )}
                </div>
              </div>
              
              {/* Detection boxes */}
              {progress > 25 && (
                <div className="absolute top-1/4 left-1/3 w-16 h-32 border-2 border-yellow-400 rounded animate-pulse">
                  <div className="absolute -top-6 left-0 bg-yellow-400 text-black px-2 py-0.5 text-xs font-medium rounded">
                    Person
                  </div>
                </div>
              )}
              
              {progress > 50 && (
                <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border-2 border-red-500 rounded animate-pulse">
                  <div className="absolute -top-6 left-0 bg-red-500 text-white px-2 py-0.5 text-xs font-medium rounded">
                    Restricted Area
                  </div>
                </div>
              )}
              
              {/* Time and status */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-white text-sm">
                  {Math.floor(progress * 0.6)}s / 60s
                </div>
                {detectionCount > 0 && (
                  <div className="bg-red-500/80 backdrop-blur-sm px-3 py-1 rounded text-white text-sm flex items-center gap-2">
                    <AlertCircle size={14} />
                    {detectionCount} anomalies detected
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-4">
              <Progress value={progress} className="h-2 mb-4" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={isPlaying ? stopProgress : startProgress}
                    className="h-9 w-9 p-0 rounded-full"
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={resetProgress}
                    className="h-9 w-9 p-0 rounded-full"
                  >
                    <Square size={16} />
                  </Button>
                </div>
                
                <div className="text-sm text-gray-600">
                  Analysis Speed: <span className="font-medium">24 fps</span>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="logs" className="glass-panel rounded-xl border border-white/40 overflow-hidden">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="logs">Detection Logs</TabsTrigger>
              <TabsTrigger value="settings">Analysis Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="logs" className="p-0 border-none">
              <div className="max-h-[400px] overflow-y-auto">
                <div className="p-4">
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    Detected Events
                  </div>
                  <div className="divide-y">
                    {detectionLogs.map((log, index) => (
                      <div key={index} className="py-3 flex items-start gap-3">
                        <div 
                          className={cn(
                            "mt-0.5 w-2 h-2 rounded-full",
                            log.severity === "high" ? "bg-red-500" : 
                            log.severity === "medium" ? "bg-yellow-500" : "bg-blue-500"
                          )}
                        />
                        <div>
                          <div className="flex justify-between">
                            <span className="font-medium">{log.type}</span>
                            <span className="text-gray-500 text-xs">{log.time}</span>
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            Confidence: {Math.floor(Math.random() * 30) + 70}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="p-4 space-y-4">
              <div>
                <label className="text-sm font-medium">Detection Sensitivity</label>
                <div className="mt-1">
                  <input type="range" min="1" max="10" value="7" className="w-full" />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Detection Classes</label>
                <div className="mt-2 space-y-2">
                  {["Person", "Vehicle", "Restricted Area", "Fire", "Suspicious Activity"].map((item) => (
                    <div key={item} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={item} 
                        defaultChecked 
                        className="mr-2" 
                      />
                      <label htmlFor={item} className="text-sm">{item}</label>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Demo;
