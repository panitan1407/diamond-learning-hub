// =============================================================================
// DIAMOND GAME ENGINE: HERO AVATAR, REWARDS & BOSS BATTLE SYSTEM
// For Diamond (ป.2 สาธิต มศว ประสานมิตร)
// =============================================================================

(function(window) {
  'use strict';

  // --- 1. ITEM CATALOG (HERO GEAR & REWARDS) ---
  const ITEMS = {
    // HEROES
    'hero_boy': { id: 'hero_boy', slot: 'hero', name: 'ไดมอนด์เรนเจอร์', icon: '👦', price: 0, gems: 0, desc: 'ฮีโร่ตัวจริง เสียงจริง พร้อมลุยทุกวิชา!' },
    'hero_safari': { id: 'hero_safari', slot: 'hero', name: 'ลอร์ดซาฟารี', icon: '🤠', price: 80, gems: 0, desc: 'ผู้พิทักษ์สัตว์ป่าแห่งซาฟารี' },
    'hero_knight': { id: 'hero_knight', slot: 'hero', name: 'อัศวินเกราะเงิน', icon: '🛡️', price: 150, gems: 1, desc: 'อัศวินผู้พิทักษ์ความรู้' },
    'hero_wizard': { id: 'hero_wizard', slot: 'hero', name: 'จอมเวทย์ดวงดาว', icon: '🧙‍♂️', price: 250, gems: 2, desc: 'ร่ายมนตร์ตอบถูกทุกข้อ!' },
    'hero_cyber': { id: 'hero_cyber', slot: 'hero', name: 'ไซเบอร์โรบอท', icon: '🤖', price: 400, gems: 5, desc: 'หุ่นยนต์อัจฉริยะพลังสูง' },
    'hero_super': { id: 'hero_super', slot: 'hero', name: 'ซูเปอร์ไดมอนด์ทองคำ', icon: '🦸‍♂️', price: 600, gems: 10, desc: 'ร่างอัลติเมทไร้เทียมทาน!' },

    // HATS & HEADWEAR
    'hat_cap': { id: 'hat_cap', slot: 'hat', name: 'หมวกแก๊ปสปอร์ต', icon: '🧢', price: 40, gems: 0, desc: 'เท่ คล่องตัว สไตล์นักกีฬา' },
    'hat_cowboy': { id: 'hat_cowboy', slot: 'hat', name: 'หมวกคาวบอยหนัง', icon: '🤠', price: 70, gems: 0, desc: 'หมวกนักผจญภัยแดนตะวันตก' },
    'hat_detective': { id: 'hat_detective', slot: 'hat', name: 'หมวกนักสืบโคนัน', icon: '🕵️', price: 100, gems: 0, desc: 'เพิ่มพลังการสังเกตจับผิดโจทย์' },
    'hat_viking': { id: 'hat_viking', slot: 'hat', name: 'หมวกไวกิ้งติดเขา', icon: '🪖', price: 150, gems: 1, desc: 'พลังใจเข้มแข็งไม่กลัวข้อสอบ' },
    'hat_chef': { id: 'hat_chef', slot: 'hat', name: 'หมวกมาสเตอร์เชฟ', icon: '👨‍🍳', price: 180, gems: 1, desc: 'ปรุงคำตอบออกมาได้อร่อยเหาะ' },
    'hat_crown_silver': { id: 'hat_crown_silver', slot: 'hat', name: 'มงกุฎเงินแห่งปัญญา', icon: '👑', price: 250, gems: 2, desc: 'มงกุฎสำหรับคนเก่งระดับท็อป' },
    'hat_crown_gold': { id: 'hat_crown_gold', slot: 'hat', name: 'มงกุฎทองคำราชันย์', icon: '👑', price: 450, gems: 5, desc: 'มงกุฎทองคำแท้เปล่งประกาย' },
    'hat_crown_diamond': { id: 'hat_crown_diamond', slot: 'hat', name: 'มงกุฎเพชรเจิดจรัส', icon: '💎', price: 700, gems: 12, desc: 'มงกุฎเพชรสำหรับน้องไดมอนด์!' },

    // SUITS & CAPES
    'suit_student': { id: 'suit_student', slot: 'suit', name: 'ชุดนักเรียนสาธิตฯ', icon: '👔', price: 0, gems: 0, desc: 'ชุดเก่งประจำตัวน้องไดมอนด์' },
    'suit_adventurer': { id: 'suit_adventurer', slot: 'suit', name: 'ชุดนักสำรวจป่า', icon: '🦺', price: 60, gems: 0, desc: 'มีกระเป๋าใส่คีย์เวิร์ดเพียบ' },
    'suit_cape_red': { id: 'suit_cape_red', slot: 'suit', name: 'ผ้าคลุมฮีโร่สีแดง', icon: '🦸', price: 120, gems: 1, desc: 'พัดปลิวตามลม เพิ่มพลังโจมตี' },
    'suit_armor': { id: 'suit_armor', slot: 'suit', name: 'ชุดเกราะอัศวินเงิน', icon: '🎽', price: 220, gems: 2, desc: 'ป้องกันข้อหลอกได้ 100%' },
    'suit_space': { id: 'suit_space', slot: 'suit', name: 'ชุดอวกาศนีออน', icon: '🧑‍🚀', price: 350, gems: 4, desc: 'ลอยตัวทำข้อสอบได้กลางอวกาศ' },
    'suit_royal': { id: 'suit_royal', slot: 'suit', name: 'เสื้อคลุมราชันย์ขลิบทอง', icon: '👘', price: 550, gems: 8, desc: 'ชุดของราชาผู้พิชิตคะแนนเต็ม' },

    // WEAPONS & HELD ITEMS
    'wp_pencil': { id: 'wp_pencil', slot: 'weapon', name: 'ดินสอวิเศษ 2B', icon: '✏️', price: 0, gems: 0, desc: 'เขียนคำตอบไหนก็ถูกต้อง' },
    'wp_magnifier': { id: 'wp_magnifier', slot: 'weapon', name: 'แว่นขยายส่องจุดหลอก', icon: '🔍', price: 50, gems: 0, desc: 'ส่องเห็นคำตอบที่ถูกทันที' },
    'wp_wand': { id: 'wp_wand', slot: 'weapon', name: 'คทาดวงดาวเวทมนตร์', icon: '🪄', price: 120, gems: 1, desc: 'เสกคะแนนเต็มทุกชุด' },
    'wp_sword': { id: 'wp_sword', slot: 'weapon', name: 'ดาบเลเซอร์เซเบอร์', icon: '⚔️', price: 240, gems: 2, desc: 'ฟันมอนสเตอร์โจทย์ยากขาดกระจุย' },
    'wp_hammer': { id: 'wp_hammer', slot: 'weapon', name: 'ค้อนสายฟ้าทอร์', icon: '⚡', price: 380, gems: 4, desc: 'ฟาดทีเดียวบอสกระจาย' },
    'wp_trophy': { id: 'wp_trophy', slot: 'weapon', name: 'ถ้วยทองแชมเปียนสาธิต', icon: '🏆', price: 500, gems: 6, desc: 'สัญลักษณ์ของแชมป์ ป.2 เทอม 2' },

    // PETS
    'pet_none': { id: 'pet_none', slot: 'pet', name: 'ยังไม่มีสัตว์เลี้ยง', icon: '⚪', price: 0, gems: 0, desc: '' },
    'pet_dog': { id: 'pet_dog', slot: 'pet', name: 'น้องหมาพุดเดิ้ล', icon: '🐶', price: 80, gems: 0, desc: 'เห่าเชียร์อัปเวลาตอบถูก' },
    'pet_cat': { id: 'pet_cat', slot: 'pet', name: 'แมวส้มจอมกวน', icon: '🐱', price: 100, gems: 0, desc: 'นอนเฝ้าข้างๆ เวลาทำข้อสอบ' },
    'pet_penguin': { id: 'pet_penguin', slot: 'pet', name: 'เพนกวินซาฟารี', icon: '🐧', price: 160, gems: 1, desc: 'ว่ายน้ำเก่ง บินไม่ได้แต่น่ารัก' },
    'pet_lion': { id: 'pet_lion', slot: 'pet', name: 'ลูกสิงโตเจ้าป่า', icon: '🦁', price: 260, gems: 2, desc: 'คำรามขู่บอสให้กลัว' },
    'pet_dragon': { id: 'pet_dragon', slot: 'pet', name: 'ลูกมังกรไฟเบบี้', icon: '🐲', price: 420, gems: 5, desc: 'พ่นไฟช่วยโจมตีบอส' },
    'pet_unicorn': { id: 'pet_unicorn', slot: 'pet', name: 'ยูนิคอร์นสายรุ้ง', icon: '🦄', price: 580, gems: 8, desc: 'เปล่งประกายสีรุ้งนำโชค' },

    // AURAS
    'aura_none': { id: 'aura_none', slot: 'aura', name: 'ออร่าปกติ', icon: '⚪', price: 0, gems: 0, desc: '' },
    'aura_sparkle': { id: 'aura_sparkle', slot: 'aura', name: 'ละอองดาวระยิบระยับ', icon: '✨', price: 90, gems: 1, desc: 'มีดาวลอยรอบตัวตลอดเวลา' },
    'aura_fire': { id: 'aura_fire', slot: 'aura', name: 'เปลวเพลิงนักสู้', icon: '🔥', price: 200, gems: 2, desc: 'ไฟลุกโชนเมื่อทำคอมโบ' },
    'aura_wings': { id: 'aura_wings', slot: 'aura', name: 'ปีกเทวดาสีทอง', icon: '🪽', price: 360, gems: 4, desc: 'ติดปีกโบยบินสู่คะแนนเต็ม' },
    'aura_saiyan': { id: 'aura_saiyan', slot: 'aura', name: 'ซูเปอร์ออร่าสายฟ้าเทพ', icon: '⚡', price: 650, gems: 10, desc: 'สายฟ้าฟาดรอบตัว เท่ที่สุด!' }
  };

  // --- 2. DEFAULT REAL-LIFE REWARD COUPONS ---
  const DEFAULT_COUPONS = [
    { id: 'c_icecream', title: 'กินไอศกรีมรสโปรด 1 ถ้วย/โคน', icon: '🍦', costCoins: 120, costGems: 0, desc: 'ยื่นคูปองนี้ให้คุณพ่อคุณแม่เพื่อไปกินไอศกรีมแสนอร่อย!' },
    { id: 'c_game_time', title: 'เล่นเกม/ดูคลิปโปรดเพิ่ม 30 นาที', icon: '🎮', costCoins: 180, costGems: 1, desc: 'ได้รับสิทธิ์เล่นเกมหรือดูการ์ตูนเพิ่มเป็นพิเศษ 30 นาที!' },
    { id: 'c_snack', title: 'เลือกขนม/ชานมไข่มุกตามใจ 1 อย่าง', icon: '🧋', costCoins: 150, costGems: 0, desc: 'เลือกซื้อขนมหรือเครื่องดื่มแก้วโปรด 1 อย่าง' },
    { id: 'c_dinner', title: 'เลือกเมนูอาหารเย็นตามใจ 1 มื้อ', icon: '🍕', costCoins: 250, costGems: 2, desc: 'อยากกินพิซซ่า ชาบู สเต๊ก หรือไก่ทอด สั่งได้เลย 1 มื้อ!' },
    { id: 'c_outing', title: 'ทริปไปปั่นจักรยาน/เที่ยวสวนสนุกวันหยุด', icon: '🚲', costCoins: 400, costGems: 4, desc: 'พาไปเที่ยวเล่นข้างนอกตามที่น้องไดมอนด์อยากไป' },
    { id: 'c_toy', title: 'เลือกซื้อของเล่น/โมเดลชิ้นใหม่ 1 ชิ้น', icon: '🎁', costCoins: 600, costGems: 8, desc: 'รางวัลใหญ่สุดว้าวสำหรับคนขยันตัวจริง!' }
  ];

  // --- 3. STORAGE & STATE ENGINE ---
  const STORAGE_KEY = 'diamond_hero_save_v2';

  function getDefaultSave() {
    return {
      name: 'น้องไดมอนด์',
      level: 1,
      xp: 0,
      coins: 50, // Starting gift!
      gems: 2,
      equipped: {
        hero: 'hero_boy',
        hat: 'hat_cap',
        suit: 'suit_student',
        weapon: 'wp_pencil',
        pet: 'pet_none',
        aura: 'aura_none'
      },
      inventory: ['hero_boy', 'hat_cap', 'suit_student', 'wp_pencil', 'pet_none', 'aura_none'],
      redeemedCoupons: [],
      customCoupons: []
    };
  }

  function loadSave() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return getDefaultSave();
      const data = JSON.parse(raw);
      // Ensure all keys exist
      return Object.assign(getDefaultSave(), data);
    } catch (e) {
      return getDefaultSave();
    }
  }

  function writeSave(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      // Also sync total stars for legacy widgets
      localStorage.setItem('diamond_total_stars', data.coins.toString());
      window.dispatchEvent(new CustomEvent('diamond_save_updated', { detail: data }));
    } catch (e) {}
  }

  // --- 4. AUDIO & VISUAL EFFECTS ENGINE ---
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  function playSound(type) {
    try {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const now = audioCtx.currentTime;
      if (type === 'coin') {
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(987.77, now); // B5
        osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6
        g.gain.setValueAtTime(0.2, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(g); g.connect(audioCtx.destination);
        osc.start(now); osc.stop(now + 0.35);
      } else if (type === 'hit') {
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.2);
        g.gain.setValueAtTime(0.25, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.connect(g); g.connect(audioCtx.destination);
        osc.start(now); osc.stop(now + 0.22);
      } else if (type === 'boss_defeat' || type === 'victory') {
        [523.25, 659.25, 783.99, 1046.5, 1318.51].forEach((f, i) => {
          const osc = audioCtx.createOscillator();
          const g = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now + i * 0.09);
          g.gain.setValueAtTime(0.22, now + i * 0.09);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.09 + 0.4);
          osc.connect(g); g.connect(audioCtx.destination);
          osc.start(now + i * 0.09); osc.stop(now + i * 0.09 + 0.4);
        });
      } else if (type === 'levelup') {
        [440, 554.37, 659.25, 880].forEach((f, i) => {
          const osc = audioCtx.createOscillator();
          const g = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now + i * 0.08);
          g.gain.setValueAtTime(0.25, now + i * 0.08);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.3);
          osc.connect(g); g.connect(audioCtx.destination);
          osc.start(now + i * 0.08); osc.stop(now + i * 0.08 + 0.3);
        });
      } else if (type === 'buy') {
        [659.25, 880, 1046.5].forEach((f, i) => {
          const osc = audioCtx.createOscillator();
          const g = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now + i * 0.06);
          g.gain.setValueAtTime(0.2, now + i * 0.06);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.25);
          osc.connect(g); g.connect(audioCtx.destination);
          osc.start(now + i * 0.06); osc.stop(now + i * 0.06 + 0.25);
        });
      }
    } catch (e) {}
  }

  // Pure inline Confetti effect!
  function launchConfetti() {
    try {
      const c = document.createElement('canvas');
      c.style.position = 'fixed';
      c.style.top = '0';
      c.style.left = '0';
      c.style.width = '100vw';
      c.style.height = '100vh';
      c.style.pointerEvents = 'none';
      c.style.zIndex = '99999';
      document.body.appendChild(c);

      const ctx = c.getContext('2d');
      c.width = window.innerWidth;
      c.height = window.innerHeight;

      const particles = [];
      const colors = ['#ffd166', '#ff9f1c', '#2b9348', '#0077b6', '#7209b7', '#ef476f', '#06d6a0'];
      for (let i = 0; i < 90; i++) {
        particles.push({
          x: c.width / 2,
          y: c.height / 2 - 80,
          vx: (Math.random() - 0.5) * 16,
          vy: (Math.random() - 0.8) * 18,
          size: Math.random() * 9 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          dr: (Math.random() - 0.5) * 10
        });
      }

      let frame = 0;
      function animate() {
        ctx.clearRect(0, 0, c.width, c.height);
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.35; // gravity
          p.rotation += p.dr;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
          ctx.restore();
        });
        frame++;
        if (frame < 80) {
          requestAnimationFrame(animate);
        } else {
          c.remove();
        }
      }
      animate();
    } catch (e) {}
  }

  // --- 5. AVATAR VISUAL RENDERER ---
  function renderAvatarHTML(equipped, size = 'md') {
    const hero = ITEMS[equipped.hero] || ITEMS['hero_boy'];
    const hat = ITEMS[equipped.hat] || ITEMS['hat_cap'];
    const suit = ITEMS[equipped.suit] || ITEMS['suit_student'];
    const weapon = ITEMS[equipped.weapon] || ITEMS['wp_pencil'];
    const pet = ITEMS[equipped.pet] || ITEMS['pet_none'];
    const aura = ITEMS[equipped.aura] || ITEMS['aura_none'];

    const auraClass = aura.id === 'aura_fire' ? 'dmg-aura-fire' : (aura.id === 'aura_saiyan' ? 'dmg-aura-saiyan' : (aura.id === 'aura_sparkle' ? 'dmg-aura-sparkle' : ''));

    const szMap = {
      sm: { box: 64, hero: 32, sub: 18 },
      md: { box: 96, hero: 52, sub: 26 },
      lg: { box: 140, hero: 76, sub: 38 }
    };
    const s = szMap[size] || szMap.md;

    return `
      <div class="diamond-avatar-wrap ${auraClass}" style="width:${s.box}px; height:${s.box}px;">
        ${aura.id === 'aura_wings' ? `<div class="avatar-layer avatar-wings" style="font-size:${s.sub * 1.5}px;">🪽</div>` : ''}
        <div class="avatar-hero-body" style="font-size:${s.hero}px;">${hero.icon}</div>
        ${hat.id !== 'hat_none' ? `<div class="avatar-layer avatar-hat" style="font-size:${s.sub * 1.25}px;">${hat.icon}</div>` : ''}
        ${weapon.id !== 'wp_none' ? `<div class="avatar-layer avatar-weapon" style="font-size:${s.sub}px;">${weapon.icon}</div>` : ''}
        ${pet.id !== 'pet_none' ? `<div class="avatar-layer avatar-pet" style="font-size:${s.sub}px;">${pet.icon}</div>` : ''}
      </div>
    `;
  }

  // --- 6. CORE ENGINE API ---
  const DiamondEngine = {
    ITEMS,
    DEFAULT_COUPONS,

    getSave: loadSave,

    save: function(data) {
      writeSave(data);
    },

    addRewards: function(coins = 0, gems = 0, xp = 0) {
      const data = loadSave();
      data.coins += coins;
      data.gems += gems;
      data.xp += xp;

      // Level calculation: Every (level * 100) XP levels up!
      let reqXp = data.level * 100;
      let leveledUp = false;
      while (data.xp >= reqXp) {
        data.xp -= reqXp;
        data.level++;
        data.gems += 2; // Level up bonus!
        data.coins += 50;
        reqXp = data.level * 100;
        leveledUp = true;
      }
      writeSave(data);

      if (coins > 0) playSound('coin');
      if (leveledUp) {
        playSound('levelup');
        launchConfetti();
        DiamondEngine.showToast(`🎉 ยินดีด้วยน้องไดมอนด์! เลเวลอัปเป็น Level ${data.level}! ได้รับโบนัส +50 🪙 +2 💎`);
      }
      return { data, leveledUp };
    },

    buyItem: function(itemId) {
      const item = ITEMS[itemId];
      if (!item) return { success: false, msg: 'ไม่พบไอเทม' };
      const data = loadSave();
      if (data.inventory.includes(itemId)) {
        // Already owned, just equip!
        return DiamondEngine.equipItem(item.slot, itemId);
      }
      if (data.coins < item.price || data.gems < item.gems) {
        return { success: false, msg: `แต้มไม่พอ! ต้องใช้ ${item.price} 🪙 และ ${item.gems} 💎` };
      }
      data.coins -= item.price;
      data.gems -= item.gems;
      data.inventory.push(itemId);
      data.equipped[item.slot] = itemId;
      writeSave(data);
      playSound('buy');
      launchConfetti();
      return { success: true, msg: `ซื้อและสวมใส่ ${item.name} สำเร็จแล้ว!` };
    },

    equipItem: function(slot, itemId) {
      const data = loadSave();
      if (!data.inventory.includes(itemId)) return { success: false, msg: 'ยังไม่ได้ซื้อไอเทมนี้' };
      data.equipped[slot] = itemId;
      writeSave(data);
      playSound('buy');
      return { success: true, msg: `สวมใส่ ${ITEMS[itemId].name} เรียบร้อย!` };
    },

    redeemCoupon: function(coupon) {
      const data = loadSave();
      if (data.coins < coupon.costCoins || data.gems < coupon.costGems) {
        return { success: false, msg: `แต้มไม่พอแลก! ต้องใช้ ${coupon.costCoins} 🪙 และ ${coupon.costGems} 💎` };
      }
      data.coins -= coupon.costCoins;
      data.gems -= coupon.costGems;
      const code = 'DM-' + Math.floor(100000 + Math.random() * 900000);
      const record = {
        code: code,
        title: coupon.title,
        icon: coupon.icon,
        desc: coupon.desc,
        time: new Date().toLocaleString('th-TH'),
        verified: false
      };
      data.redeemedCoupons.unshift(record);
      writeSave(data);
      playSound('victory');
      launchConfetti();
      return { success: true, record };
    },

    verifyCoupon: function(code) {
      const data = loadSave();
      const item = data.redeemedCoupons.find(c => c.code === code);
      if (item) {
        item.verified = true;
        writeSave(data);
        return true;
      }
      return false;
    },

    addCustomCoupon: function(title, icon, costCoins, costGems, desc) {
      const data = loadSave();
      const newC = {
        id: 'cust_' + Date.now(),
        title: title || 'รางวัลพิเศษจากคุณพ่อคุณแม่',
        icon: icon || '🎁',
        costCoins: parseInt(costCoins, 10) || 100,
        costGems: parseInt(costGems, 10) || 0,
        desc: desc || 'รางวัลพิเศษที่คุณพ่อคุณแม่ตั้งให้คนเก่ง'
      };
      data.customCoupons.push(newC);
      writeSave(data);
      return newC;
    },

    deleteCustomCoupon: function(couponId) {
      const data = loadSave();
      data.customCoupons = data.customCoupons.filter(c => c.id !== couponId);
      writeSave(data);
    },

    getAllCoupons: function() {
      const data = loadSave();
      return [...DEFAULT_COUPONS, ...(data.customCoupons || [])];
    },

    showToast: function(msg) {
      let t = document.getElementById('diamond-toast');
      if (!t) {
        t = document.createElement('div');
        t.id = 'diamond-toast';
        t.className = 'diamond-toast-box';
        document.body.appendChild(t);
      }
      t.innerHTML = msg;
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 2800);
    },

    renderAvatarHTML: renderAvatarHTML,
    playSound: playSound,
    launchConfetti: launchConfetti
  };

  // --- 7. INJECT ENGINE CSS STYLES ---
  const CSS = `
    /* Diamond Avatar Layers */
    .diamond-avatar-wrap {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(circle, #fffbf0 0%, #ffe8b3 100%);
      border: 3px solid #ff9f1c;
      border-radius: 50%;
      user-select: none;
      box-shadow: 0 6px 18px rgba(255, 159, 28, 0.25);
      animation: avatarFloat 2.8s ease-in-out infinite alternate;
    }
    @keyframes avatarFloat {
      0% { transform: translateY(0); }
      100% { transform: translateY(-5px); }
    }
    .avatar-layer {
      position: absolute;
      pointer-events: none;
    }
    .avatar-hat {
      top: -12%;
      left: 50%;
      transform: translateX(-50%);
    }
    .avatar-weapon {
      bottom: 2%;
      right: -8%;
    }
    .avatar-pet {
      bottom: -6%;
      left: -10%;
      animation: petBounce 1.5s ease-in-out infinite alternate;
    }
    @keyframes petBounce {
      0% { transform: translateY(0); }
      100% { transform: translateY(-4px) scale(1.08); }
    }
    .avatar-wings {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
      opacity: 0.9;
      animation: wingsFlap 1.2s infinite ease-in-out alternate;
    }
    @keyframes wingsFlap {
      0% { transform: translate(-50%, -50%) scale(1); }
      100% { transform: translate(-50%, -50%) scale(1.15) rotate(4deg); }
    }
    .avatar-hero-body {
      position: relative;
      z-index: 1;
    }

    /* Auras */
    .dmg-aura-fire {
      box-shadow: 0 0 20px #f77f00, 0 0 35px #d62828 !important;
      border-color: #f77f00 !important;
    }
    .dmg-aura-saiyan {
      box-shadow: 0 0 22px #ffd166, 0 0 40px #00b4d8 !important;
      border-color: #ffd166 !important;
    }
    .dmg-aura-sparkle {
      box-shadow: 0 0 18px #9d4edd, 0 0 30px #e0aaff !important;
      border-color: #c77dff !important;
    }

    /* Floating Reward Number Animation */
    @keyframes floatUpFade {
      0% { opacity: 1; transform: translate(-50%, 0) scale(1); }
      100% { opacity: 0; transform: translate(-50%, -55px) scale(1.3); }
    }
    .floating-dmg-reward {
      position: absolute;
      left: 50%;
      top: 20%;
      transform: translateX(-50%);
      font-size: 1.4rem;
      font-weight: 900;
      color: #ffd166;
      text-shadow: 0 2px 8px rgba(0,0,0,0.6);
      pointer-events: none;
      z-index: 999;
      animation: floatUpFade 1.2s forwards ease-out;
    }

    /* Toast Box */
    .diamond-toast-box {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%);
      color: white;
      padding: 14px 22px;
      border-radius: 16px;
      font-weight: 800;
      font-size: 1rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      border: 2px solid #52b788;
      z-index: 99999;
      transform: translateY(120%);
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .diamond-toast-box.show {
      transform: translateY(0);
    }

    /* Modals (Shop & Coupon) */
    .dmg-modal-overlay {
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 16px;
    }
    .dmg-modal-card {
      background: white;
      width: 100%;
      max-width: 860px;
      max-height: 90vh;
      border-radius: 26px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.3);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border: 3px solid #ff9f1c;
      animation: modalPop 0.25s ease-out;
    }
    @keyframes modalPop {
      0% { transform: scale(0.92); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }
    .dmg-modal-header {
      background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 60%, #40916c 100%);
      color: white;
      padding: 18px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }
    .dmg-modal-body {
      padding: 20px;
      overflow-y: auto;
      flex: 1;
    }
    .dmg-shop-tabs {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 18px;
    }
    .dmg-tab-btn {
      background: #f1f5f9;
      border: 2px solid #cbd5e1;
      padding: 8px 16px;
      border-radius: 999px;
      font-weight: 800;
      font-size: 0.9rem;
      cursor: pointer;
      color: #334155;
      transition: all 0.15s;
    }
    .dmg-tab-btn:hover { background: #e2e8f0; }
    .dmg-tab-btn.active {
      background: #ff9f1c;
      color: white;
      border-color: #f77f00;
      box-shadow: 0 4px 10px rgba(247,127,0,0.25);
    }
    .dmg-item-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 14px;
    }
    .dmg-item-card {
      border: 2.5px solid #e2e8f0;
      border-radius: 18px;
      padding: 16px;
      text-align: center;
      background: #ffffff;
      transition: all 0.18s;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 8px;
    }
    .dmg-item-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
      border-color: #52b788;
    }
    .dmg-item-card.equipped {
      border-color: #2b9348;
      background: #f0fdf4;
    }

    /* Boss Battle Arena Widget */
    .boss-battle-wrap {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      color: white;
      border-radius: 20px;
      padding: 18px 22px;
      margin-bottom: 20px;
      border: 3px solid #ff9f1c;
      box-shadow: 0 10px 25px rgba(0,0,0,0.25);
    }
    .boss-stage-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 14px;
      border-bottom: 1px dashed rgba(255,255,255,0.2);
      padding-bottom: 8px;
    }
    .boss-battle-ring {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 16px;
    }
    @media (max-width: 600px) {
      .boss-battle-ring { grid-template-columns: 1fr; text-align: center; }
    }
    .combatant-card {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    @media (max-width: 600px) {
      .combatant-card { justify-content: center; }
    }
    .hp-bar-bg {
      background: rgba(255,255,255,0.2);
      height: 12px;
      border-radius: 99px;
      overflow: hidden;
      margin-top: 4px;
      width: 140px;
    }
    .hp-bar-fill {
      height: 100%;
      border-radius: 99px;
      transition: width 0.35s ease;
    }
    .vs-badge {
      background: linear-gradient(135deg, #ef476f, #d62828);
      color: white;
      font-weight: 900;
      font-size: 1.1rem;
      padding: 6px 14px;
      border-radius: 99px;
      box-shadow: 0 4px 12px rgba(239, 71, 111, 0.4);
    }
  `;

  // Inject CSS automatically
  const styleEl = document.createElement('style');
  styleEl.innerHTML = CSS;
  document.head.appendChild(styleEl);

  // --- 8. GLOBAL SHOP MODAL UI ---
  DiamondEngine.openShopModal = function(initialTab = 'hat') {
    let existing = document.getElementById('diamond-shop-modal');
    if (existing) existing.remove();

    const save = loadSave();
    const modal = document.createElement('div');
    modal.id = 'diamond-shop-modal';
    modal.className = 'dmg-modal-overlay';

    modal.innerHTML = `
      <div class="dmg-modal-card">
        <div class="dmg-modal-header">
          <div style="display:flex;align-items:center;gap:12px;">
            <div id="shopAvatarPreview">${renderAvatarHTML(save.equipped, 'sm')}</div>
            <div>
              <h2 style="font-size:1.35rem;font-weight:900;">👑 ร้านแต่งตัวฮีโร่ & แลกรางวัล (Hero Shop & Vault)</h2>
              <p style="font-size:0.88rem;opacity:0.9;">สะสมแต้มจากการตอบถูก เพื่อปลดล็อกของรางวัลสุดเจ๋ง!</p>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:14px;">
            <div style="background:rgba(0,0,0,0.25);padding:8px 16px;border-radius:14px;font-weight:900;display:flex;gap:12px;font-size:1.1rem;">
              <span>🪙 <span id="shopCoinsVal">${save.coins}</span></span>
              <span>💎 <span id="shopGemsVal">${save.gems}</span></span>
            </div>
            <button onclick="document.getElementById('diamond-shop-modal').remove()" style="background:none;border:none;color:white;font-size:1.8rem;cursor:pointer;line-height:1;">✕</button>
          </div>
        </div>

        <div class="dmg-modal-body">
          <div class="dmg-shop-tabs">
            <button class="dmg-tab-btn active" onclick="switchShopTab('hat')">👑 หมวก & มงกุฎ</button>
            <button class="dmg-tab-btn" onclick="switchShopTab('suit')">🦹 ชุดเกราะ & เสื้อคลุม</button>
            <button class="dmg-tab-btn" onclick="switchShopTab('weapon')">⚔️ อาวุธ & คทา</button>
            <button class="dmg-tab-btn" onclick="switchShopTab('pet')">🐾 สัตว์เลี้ยงคู่ใจ</button>
            <button class="dmg-tab-btn" onclick="switchShopTab('aura')">✨ ปีก & ออร่า</button>
            <button class="dmg-tab-btn" onclick="switchShopTab('hero')">🦸 ร่างฮีโร่</button>
            <button class="dmg-tab-btn" onclick="switchShopTab('coupons')" style="background:#fef3c7;border-color:#f59e0b;color:#92400e;">🎁 บัตรแลกรางวัลจริง!</button>
            <button class="dmg-tab-btn" onclick="switchShopTab('parent')" style="background:#f3e8ff;border-color:#a855f7;color:#6b21a8;">👨‍👩‍👦 จัดการคูปอง (ผู้ปกครอง)</button>
          </div>

          <div id="shopContentGrid" class="dmg-item-grid"></div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    window.switchShopTab(initialTab);
  };

  window.switchShopTab = function(tabName) {
    document.querySelectorAll('.dmg-tab-btn').forEach(b => {
      b.classList.remove('active');
      const oc = b.getAttribute('onclick') || '';
      if (oc.includes(`'${tabName}'`)) {
        b.classList.add('active');
      }
    });

    const save = loadSave();
    const container = document.getElementById('shopContentGrid');
    container.innerHTML = '';

    if (tabName === 'coupons') {
      // Real life coupons list
      const allCoupons = DiamondEngine.getAllCoupons();
      allCoupons.forEach(cp => {
        const canBuy = save.coins >= cp.costCoins && save.gems >= cp.costGems;
        const card = document.createElement('div');
        card.className = 'dmg-item-card';
        card.style.borderColor = '#f59e0b';
        card.style.background = '#fffbeb';
        card.innerHTML = `
          <div>
            <div style="font-size:2.8rem;margin-bottom:6px;">${cp.icon}</div>
            <div style="font-weight:900;font-size:1.05rem;color:#92400e;">${cp.title}</div>
            <div style="font-size:0.85rem;color:#78350f;margin-top:4px;">${cp.desc}</div>
          </div>
          <div style="margin-top:10px;">
            <div style="font-weight:800;font-size:1rem;color:#b45309;margin-bottom:8px;">
              ใช้: 🪙 ${cp.costCoins} ${cp.costGems > 0 ? `+ 💎 ${cp.costGems}` : ''}
            </div>
            <button class="nav-btn" style="width:100%;justify-content:center;background:${canBuy ? 'linear-gradient(135deg, #f59e0b, #d97706)' : '#cbd5e1'};color:white;cursor:${canBuy ? 'pointer' : 'not-allowed'};" ${canBuy ? `onclick="handleRedeemCoupon('${cp.id}')"` : 'disabled'}>
              ${canBuy ? '🎟️ แลกรับคูปองนี้!' : 'แต้มยังไม่พอ'}
            </button>
          </div>
        `;
        container.appendChild(card);
      });
      return;
    }

    if (tabName === 'parent') {
      // Parent Admin Screen: Custom Coupons & History
      container.style.display = 'block';
      const allCoupons = DiamondEngine.getAllCoupons();
      const redeemed = save.redeemedCoupons || [];

      let histHtml = redeemed.length === 0 ? '<p style="color:#64748b;">ยังไม่มีคูปองที่ถูกแลก</p>' : redeemed.map(r => `
        <div style="background:white;border:1.5px solid ${r.verified ? '#86efac' : '#fde047'};border-radius:12px;padding:12px 14px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
          <div>
            <strong>${r.icon} ${r.title}</strong> (รหัส: <code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;color:#0f172a;">${r.code}</code>)<br>
            <small style="color:#64748b;">แลกเมื่อ: ${r.time}</small>
          </div>
          <div>
            ${r.verified ? '<span style="color:#16a34a;font-weight:800;">✅ มอบรางวัลแล้ว</span>' : `<button onclick="handleVerifyCoupon('${r.code}')" style="background:#22c55e;color:white;border:none;padding:6px 14px;border-radius:8px;font-weight:800;cursor:pointer;">กดเพื่อยืนยันว่ามอบรางวัลแล้ว</button>`}
          </div>
        </div>
      `).join('');

      container.innerHTML = `
        <div style="background:#fdf4ff;border:2px solid #e879f9;border-radius:18px;padding:18px;margin-bottom:18px;">
          <h3 style="color:#86198f;margin-bottom:8px;">➕ เพิ่มคูปองรางวัลชีวิตจริงของครอบครัว (Custom Reward)</h3>
          <p style="font-size:0.9rem;color:#701a75;margin-bottom:12px;">คุณพ่อคุณแม่สามารถตั้งของรางวัลพิเศษที่น้องอยากได้ กำหนดแต้มเหรียญทองตามใจชอบได้เลยครับ:</p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:10px;margin-bottom:12px;">
            <input type="text" id="custTitle" placeholder="ชื่อรางวัล เช่น พาไปว่ายน้ำ" style="padding:10px;border-radius:10px;border:1px solid #cbd5e1;font-weight:700;" />
            <input type="text" id="custIcon" placeholder="อีโมจิ เช่น 🏊 หรือ 🍕" style="padding:10px;border-radius:10px;border:1px solid #cbd5e1;" />
            <input type="number" id="custCoins" placeholder="เหรียญทองที่ใช้ เช่น 200" style="padding:10px;border-radius:10px;border:1px solid #cbd5e1;" />
            <input type="number" id="custGems" placeholder="เพชรที่ใช้ (ถ้ามี) เช่น 2" style="padding:10px;border-radius:10px;border:1px solid #cbd5e1;" />
          </div>
          <button onclick="handleCreateCustomCoupon()" style="background:#c026d3;color:white;border:none;padding:10px 20px;border-radius:12px;font-weight:800;cursor:pointer;">💾 บันทึกคูปองใหม่ของครอบครัว</button>
        </div>

        <h3 style="color:#1e293b;margin-bottom:10px;">📜 ประวัติการแลกคูปองของน้องไดมอนด์ (${redeemed.length} รายการ)</h3>
        <div>${histHtml}</div>
      `;
      return;
    }

    container.style.display = 'grid';
    // Gear items
    const itemsInSlot = Object.values(ITEMS).filter(it => it.slot === tabName);
    itemsInSlot.forEach(item => {
      const isOwned = save.inventory.includes(item.id);
      const isEquipped = save.equipped[item.slot] === item.id;
      const canAfford = save.coins >= item.price && save.gems >= item.gems;

      const card = document.createElement('div');
      card.className = 'dmg-item-card' + (isEquipped ? ' equipped' : '');
      card.innerHTML = `
        <div>
          <div style="font-size:3rem;margin-bottom:4px;">${item.icon}</div>
          <div style="font-weight:900;font-size:1.05rem;color:#1e293b;">${item.name}</div>
          <div style="font-size:0.82rem;color:#64748b;margin-top:2px;">${item.desc}</div>
        </div>
        <div style="margin-top:10px;">
          ${!isOwned ? `
            <div style="font-weight:800;font-size:0.95rem;color:#f77f00;margin-bottom:6px;">
              🪙 ${item.price} ${item.gems > 0 ? `+ 💎 ${item.gems}` : ''}
            </div>
            <button class="nav-btn" style="width:100%;justify-content:center;background:${canAfford ? 'linear-gradient(135deg, #ff9f1c, #f77f00)' : '#cbd5e1'};color:white;cursor:${canAfford ? 'pointer' : 'not-allowed'};" ${canAfford ? `onclick="handleBuyItem('${item.id}')"` : 'disabled'}>
              ${canAfford ? '🛒 ปลดล็อกซื้อ' : 'แต้มยังไม่พอ'}
            </button>
          ` : `
            <div style="font-weight:800;font-size:0.85rem;color:#2b9348;margin-bottom:6px;">
              ${isEquipped ? '✨ กำลังสวมใส่อยู่' : 'มีในกระเป๋าแล้ว'}
            </div>
            <button class="nav-btn" style="width:100%;justify-content:center;background:${isEquipped ? '#2b9348' : '#0077b6'};color:white;cursor:pointer;" onclick="handleEquipItem('${item.slot}', '${item.id}')">
              ${isEquipped ? '✅ สวมใส่อยู่' : 'สวมใส่ชุดนี้'}
            </button>
          `}
        </div>
      `;
      container.appendChild(card);
    });
  };

  window.handleBuyItem = function(itemId) {
    const res = DiamondEngine.buyItem(itemId);
    DiamondEngine.showToast(res.msg);
    if (res.success) {
      updateShopUI();
    }
  };

  window.handleEquipItem = function(slot, itemId) {
    const res = DiamondEngine.equipItem(slot, itemId);
    DiamondEngine.showToast(res.msg);
    if (res.success) {
      updateShopUI();
    }
  };

  window.handleRedeemCoupon = function(couponId) {
    const allC = DiamondEngine.getAllCoupons();
    const cp = allC.find(c => c.id === couponId);
    if (!cp) return;
    const res = DiamondEngine.redeemCoupon(cp);
    if (!res.success) {
      DiamondEngine.showToast(res.msg);
      return;
    }

    // Show celebratory redemption voucher popup!
    const rec = res.record;
    const overlay = document.createElement('div');
    overlay.className = 'dmg-modal-overlay';
    overlay.style.zIndex = '100000';
    overlay.innerHTML = `
      <div class="dmg-modal-card" style="max-width:520px;text-align:center;padding:30px;background:linear-gradient(180deg, #fffbeb 0%, #ffffff 100%);border:4px solid #f59e0b;">
        <div style="font-size:4rem;margin-bottom:8px;">${rec.icon}</div>
        <h2 style="font-size:1.8rem;color:#92400e;font-weight:900;">🎉 แลกรับคูปองสำเร็จแล้ว!</h2>
        <h3 style="font-size:1.35rem;color:#78350f;margin:10px 0;">${rec.title}</h3>
        <p style="color:#475569;font-size:0.95rem;margin-bottom:16px;">${rec.desc}</p>
        <div style="background:#fef3c7;border:2px dashed #f59e0b;border-radius:14px;padding:14px;margin-bottom:20px;">
          <div style="font-size:0.85rem;color:#92400e;font-weight:700;">รหัสคูปองสำหรับยื่นให้คุณพ่อคุณแม่:</div>
          <div style="font-size:2rem;font-weight:900;letter-spacing:3px;color:#b45309;margin-top:4px;">${rec.code}</div>
          <small style="color:#78350f;">แลกเมื่อ: ${rec.time}</small>
        </div>
        <button onclick="this.closest('.dmg-modal-overlay').remove(); updateShopUI();" style="background:linear-gradient(135deg, #2b9348, #1b4332);color:white;border:none;padding:12px 28px;border-radius:14px;font-size:1.1rem;font-weight:900;cursor:pointer;">
          เย้! นำไปอวดคุณพ่อคุณแม่เลย ➔
        </button>
      </div>
    `;
    document.body.appendChild(overlay);
  };

  window.handleVerifyCoupon = function(code) {
    if (confirm('คุณพ่อยืนยันว่าได้มอบรางวัลจริงชิ้นนี้ให้น้องไดมอนด์แล้วใช่หรือไม่?')) {
      DiamondEngine.verifyCoupon(code);
      switchShopTab('parent');
      DiamondEngine.showToast('✅ ยืนยันการมอบรางวัลเรียบร้อย!');
    }
  };

  window.handleCreateCustomCoupon = function() {
    const title = document.getElementById('custTitle').value.trim();
    const icon = document.getElementById('custIcon').value.trim() || '🎁';
    const coins = document.getElementById('custCoins').value;
    const gems = document.getElementById('custGems').value || 0;
    if (!title) {
      alert('กรุณาใส่ชื่อของรางวัล');
      return;
    }
    DiamondEngine.addCustomCoupon(title, icon, coins, gems);
    switchShopTab('parent');
    DiamondEngine.showToast('🎉 บันทึกคูปองรางวัลใหม่สำเร็จแล้ว!');
  };

  function updateShopUI() {
    const save = loadSave();
    const cEl = document.getElementById('shopCoinsVal');
    const gEl = document.getElementById('shopGemsVal');
    if (cEl) cEl.textContent = save.coins;
    if (gEl) gEl.textContent = save.gems;
    const prev = document.getElementById('shopAvatarPreview');
    if (prev) prev.innerHTML = renderAvatarHTML(save.equipped, 'sm');

    const activeTabBtn = document.querySelector('.dmg-tab-btn.active');
    if (activeTabBtn) activeTabBtn.click();
  }

  // Expose to window
  window.DiamondEngine = DiamondEngine;

})(window);
