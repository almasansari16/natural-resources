// Self-contained Web Audio API synthesizer for mountain spring stream ambient sound
class WaterSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private gainNode: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private lfoNode: OscillatorNode | null = null;

  public init() {
    if (typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    } catch {
      // AudioContext not supported
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public play() {
    if (!this.ctx) {
      this.init();
    }
    if (!this.ctx) return;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    try {
      // Create pink noise buffer for realistic rushing stream sound
      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = buffer;
      this.noiseNode.loop = true;

      // Bandpass filter centered on soothing trickling water resonance (600Hz - 1400Hz)
      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = "bandpass";
      this.filterNode.frequency.value = 850;
      this.filterNode.Q.value = 1.8;

      // Low Frequency Oscillator for subtle gentle water wave modulation
      this.lfoNode = this.ctx.createOscillator();
      this.lfoNode.frequency.value = 0.35; // 0.35Hz water surge rhythm
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.value = 250;
      this.lfoNode.connect(lfoGain);
      lfoGain.connect(this.filterNode.frequency);

      // Master gentle gain
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.22, this.ctx.currentTime + 1.2);

      // Connect graph
      this.noiseNode.connect(this.filterNode);
      this.filterNode.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      this.noiseNode.start(0);
      this.lfoNode.start(0);
      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    if (!this.ctx || !this.isPlaying) return;

    if (this.gainNode) {
      try {
        this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.ctx.currentTime);
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
      } catch {
        // Ignore ramp error
      }
    }

    setTimeout(() => {
      try {
        this.noiseNode?.stop();
        this.noiseNode?.disconnect();
        this.lfoNode?.stop();
        this.lfoNode?.disconnect();
        this.filterNode?.disconnect();
        this.gainNode?.disconnect();
      } catch {
        // clean up
      }
      this.isPlaying = false;
    }, 800);
  }
}

export const waterAudio = new WaterSoundEngine();

