// =============================================================================
// DIAMOND GAME ENGINE V3 (AAA GAMIFICATION & VECTOR SVG RPG SYSTEM)
// Custom engineered for Diamond (ป.2 สาธิต มศว ประสานมิตร)
// =============================================================================

(function(window) {
  'use strict';

  // --- 1. ITEM CATALOG WITH RARITY & METADATA ---
  const ITEMS = {
    // HERO BASES
    'hero_boy': { id: 'hero_boy', slot: 'hero', rarity: 'common', name: 'อัศวินไดมอนด์ (Diamond Ranger)', price: 0, gems: 0, desc: 'ฮีโร่ตัวจริง เสียงจริง พร้อมลุยทุกวิชา!' },
    'hero_princess': { id: 'hero_princess', slot: 'hero', rarity: 'legendary', name: 'เจ้าหญิงไดมอนด์แสนสวย (Princess Diamond)', price: 0, gems: 0, desc: 'เจ้าหญิงแสนสง่างาม น่ารัก ฉลาด อบอุ่น พร้อมตะลุยทุกบทเรียน!' },
    'hero_magical_girl': { id: 'hero_magical_girl', slot: 'hero', rarity: 'epic', name: 'สาวน้อยเวทมนตร์คริสตัล (Magical Star Girl)', price: 150, gems: 1, desc: 'สาวน้อยเวทมนตร์ชุดกะลาสีสีชมพูประกายคริสตัล' },
    'hero_safari': { id: 'hero_safari', slot: 'hero', name: 'ลอร์ดซาฟารี', rarity: 'rare', price: 80, gems: 0, desc: 'ผู้พิทักษ์สัตว์ป่าแห่งแอฟริกา' },
    'hero_knight': { id: 'hero_knight', slot: 'hero', name: 'อัศวินเกราะเงิน', rarity: 'epic', price: 150, gems: 1, desc: 'อัศวินผู้พิทักษ์ความรู้สาธิตฯ' },
    'hero_wizard': { id: 'hero_wizard', slot: 'hero', name: 'จอมเวทย์ดวงดาว', rarity: 'epic', price: 250, gems: 2, desc: 'ร่ายมนตร์ตอบถูกทุกข้อไม่มีพลาด!' },
    'hero_cyber': { id: 'hero_cyber', slot: 'hero', name: 'ไซเบอร์โรบอทเอไอ', rarity: 'epic', price: 400, gems: 5, desc: 'หุ่นยนต์อัจฉริยะคิดเลขเร็วแสง' },
    'hero_super': { id: 'hero_super', slot: 'hero', name: 'ซูเปอร์ไดมอนด์ทองคำ', rarity: 'legendary', price: 600, gems: 10, desc: 'ร่างอัลติเมททองคำเปล่งประกายไร้เทียมทาน!' },

    // HATS & HEADWEAR (TIARAS & CROWNS)
    'hat_cap': { id: 'hat_cap', slot: 'hat', rarity: 'common', name: 'หมวกแก๊ปสปอร์ต', price: 0, gems: 0, desc: 'หมวกแก๊ปเท่ สไตล์นักกีฬาสาธิตฯ' },
    'hat_princess_tiara': { id: 'hat_princess_tiara', slot: 'hat', rarity: 'epic', name: 'มงกุฎเทียร่าเพชรแท้ประดับทับทิม', price: 0, gems: 0, desc: 'มงกุฎรัดเกล้าเจ้าหญิงเพชรแท้ ระยิบระยับสะกดทุกสายตา (ฟรีสำหรับเจ้าหญิง!)' },
    'hat_flower_coronet': { id: 'hat_flower_coronet', slot: 'hat', rarity: 'rare', name: 'รัดเกล้าดอกไม้เอลฟ์ประกายแสง', price: 70, gems: 0, desc: 'มงกุฎดอกกุหลาบและดอกซากุระเรืองแสงน่ารักมาก' },
    'hat_royal_veil': { id: 'hat_royal_veil', slot: 'hat', rarity: 'rare', name: 'ผ้าคลุมผมเจ้าหญิงประดับลูกไม้ทองคำ', price: 120, gems: 1, desc: 'ผ้าคลุมผมยาวสลวยสีชมพูอ่อนปักลูกไม้ทองคำ' },
    'hat_crystal_crown': { id: 'hat_crystal_crown', slot: 'hat', rarity: 'legendary', name: 'มงกุฎคริสตัลราชินีหิมะ', price: 250, gems: 2, desc: 'มงกุฎผลึกแก้วคริสตัลบริสุทธิ์ส่องประกายเย็นตา' },
    'hat_cowboy': { id: 'hat_cowboy', slot: 'hat', rarity: 'rare', name: 'หมวกคาวบอยหนังแท้', price: 60, gems: 0, desc: 'หมวกนักผจญภัยแดนคาวบอย' },
    'hat_detective': { id: 'hat_detective', slot: 'hat', rarity: 'rare', name: 'หมวกนักสืบโคนัน', price: 90, gems: 0, desc: 'เพิ่มพลังการสังเกตจับผิดช้อยส์หลอก' },
    'hat_viking': { id: 'hat_viking', slot: 'hat', rarity: 'epic', name: 'หมวกไวกิ้งติดเขาคู่', price: 140, gems: 1, desc: 'พลังใจเข้มแข็งไม่กลัวข้อสอบยาก' },
    'hat_chef': { id: 'hat_chef', slot: 'hat', rarity: 'rare', name: 'หมวกมาสเตอร์เชฟ', price: 160, gems: 1, desc: 'ปรุงคำตอบออกมาได้ถูกต้องเป๊ะ' },
    'hat_crown_silver': { id: 'hat_crown_silver', slot: 'hat', rarity: 'epic', name: 'มงกุฎเงินแห่งปัญญา', price: 220, gems: 2, desc: 'มงกุฎเงินประดับพลอยไพลินสีน้ำเงิน' },
    'hat_crown_gold': { id: 'hat_crown_gold', slot: 'hat', rarity: 'legendary', name: 'มงกุฎทองคำราชันย์', price: 400, gems: 5, desc: 'มงกุฎทองคำแท้ประดับทับทิมสีแดงสด' },
    'hat_crown_diamond': { id: 'hat_crown_diamond', slot: 'hat', rarity: 'legendary', name: 'มงกุฎเพชรเจิดจรัส', price: 650, gems: 12, desc: 'มงกุฎเพชรประกายสายรุ้งสำหรับน้องไดมอนด์!' },

    // SUITS & EXTRAVAGANT PRINCESS GOWNS
    'suit_student': { id: 'suit_student', slot: 'suit', rarity: 'common', name: 'ชุดนักเรียนสาธิตฯ', price: 0, gems: 0, desc: 'ชุดนักเรียนสุดเรียบร้อยพร้อมสอบ' },
    'suit_princess_cinderella': { id: 'suit_princess_cinderella', slot: 'suit', rarity: 'legendary', name: 'ชุดราตรีเจ้าหญิงซินเดอเรลล่าประกายดาว', price: 0, gems: 0, desc: 'ชุดราตรีสีฟ้าครามระยิบระยับ พองฟูอลังการ ประดับเพชรประกายดาว (ฟรีชุดแรก!)' },
    'suit_princess_aurora': { id: 'suit_princess_aurora', slot: 'suit', rarity: 'legendary', name: 'ชุดเจ้าหญิงกุหลาบแก้วโรสโกลด์', price: 180, gems: 1, desc: 'ชุดผ้าไหมสีชมพูกุหลาบขลิบทองคำ ชายกระโปรงระบาย 3 ชั้น สุดหรูหราอลังการ' },
    'suit_princess_ice_crystal': { id: 'suit_princess_ice_crystal', slot: 'suit', rarity: 'legendary', name: 'ชุดราชินีหิมะคริสตัลเอลซ่า', price: 300, gems: 3, desc: 'ชุดราตรีผลึกน้ำแข็งคริสตัลโปร่งแสง มีผ้าคลุมเกล็ดหิมะทอประกายเพชร' },
    'suit_princess_celestial': { id: 'suit_princess_celestial', slot: 'suit', rarity: 'legendary', name: 'ชุดจักรพรรดินีดวงดาวประกายรุ้ง 7 สี', price: 450, gems: 6, desc: 'ชุดเจ้าหญิงระดับไฮเอนด์ ประดับมรกต ทับทิม และดาวนำโชค 7 สี!' },
    'suit_adventurer': { id: 'suit_adventurer', slot: 'suit', rarity: 'rare', name: 'ชุดนักสำรวจซาฟารี', price: 50, gems: 0, desc: 'มีกระเป๋าใส่คีย์เวิร์ดรอบตัว' },
    'suit_cape_red': { id: 'suit_cape_red', slot: 'suit', rarity: 'rare', name: 'ผ้าคลุมฮีโร่สีแดง', price: 110, gems: 1, desc: 'ผ้าคลุมพัดโบกสะบัดสง่างาม' },
    'suit_royal': { id: 'suit_royal', slot: 'suit', rarity: 'epic', name: 'ชุดคลุมราชวงศ์สีม่วงทอง', price: 200, gems: 2, desc: 'ชุดคลุมกำมะหยี่สีม่วงเข้มขลิบดิ้นทองคำ' },
    'suit_armor': { id: 'suit_armor', slot: 'suit', rarity: 'epic', name: 'เกราะเหล็กอัศวินพาลาดิน', price: 280, gems: 3, desc: 'เกราะเหล็กกล้าเงาวับป้องกันข้อผิดพลาด' },
    'suit_space': { id: 'suit_space', slot: 'suit', rarity: 'legendary', name: 'ชุดอวกาศไฮเทคล้ำยุค', price: 500, gems: 7, desc: 'ชุดนักบินอวกาศมีออกซิเจนแห่งความฉลาด' },

    // WEAPONS & WANDS
    'wp_pencil': { id: 'wp_pencil', slot: 'weapon', rarity: 'common', name: 'ดินสอ 2B มหัศจรรย์', price: 0, gems: 0, desc: 'ฝนคำตอบถูกทุกข้อแบบไม่หัก' },
    'wp_magic_star_scepter': { id: 'wp_magic_star_scepter', slot: 'weapon', rarity: 'epic', name: 'คทาเวทมนตร์ดวงดาวคริสตัล', price: 0, gems: 0, desc: 'ร่ายมนตร์ยิงดาวตกช่วยทำลายเกราะบอส (ฟรีสำหรับเจ้าหญิง!)' },
    'wp_sakura_wand': { id: 'wp_sakura_wand', slot: 'weapon', rarity: 'legendary', name: 'คทาหัวใจซากุระนางฟ้า', price: 190, gems: 2, desc: 'ส่งพลังความรักและความเมตตาตอบถูกทุกข้อ' },
    'wp_diamond_heart': { id: 'wp_diamond_heart', slot: 'weapon', rarity: 'legendary', name: 'คทาเพชรหัวใจจักรพรรดินี', price: 350, gems: 4, desc: 'คทาทองคำฝังเพชรรูปหัวใจแท้ระดับพรีเมียม' },
    'wp_magnifier': { id: 'wp_magnifier', slot: 'weapon', rarity: 'rare', name: 'แว่นขยายส่องคีย์เวิร์ด', price: 70, gems: 0, desc: 'ส่องเห็นคำตอบที่ซ่อนอยู่อย่างง่ายดาย' },
    'wp_wand': { id: 'wp_wand', slot: 'weapon', rarity: 'epic', name: 'ไม้กายสิทธิ์ดวงดาว', price: 180, gems: 2, desc: 'เสกคะแนนเต็ม 100 ให้เป็นจริง' },
    'wp_sword': { id: 'wp_sword', slot: 'weapon', rarity: 'epic', name: 'ดาบเลเซอร์พลังงานแสง', price: 260, gems: 3, desc: 'ฟันฝ่าโจทย์เลขและวิทย์ยากๆ ขาดกระจุย' },
    'wp_hammer': { id: 'wp_hammer', slot: 'weapon', rarity: 'epic', name: 'ค้อนสายฟ้าทุบบอส', price: 350, gems: 4, desc: 'ทุบคะแนนบอสลดฮวบทีละ 2 หน่วย' },
    'wp_trophy': { id: 'wp_trophy', slot: 'weapon', rarity: 'legendary', name: 'ถ้วยแชมป์เปี้ยนทองคำแท้', price: 550, gems: 8, desc: 'ถ้วยรางวัลเกียรติยศสูงสุดแห่งสาธิตฯ' },

    // PETS & COMPANIONS
    'pet_none': { id: 'pet_none', slot: 'pet', rarity: 'common', name: 'ไม่มีสัตว์เลี้ยง', price: 0, gems: 0, desc: '' },
    'pet_fairy': { id: 'pet_fairy', slot: 'pet', rarity: 'epic', name: 'ภูติน้อยคริสตัลประกายเพชร', price: 180, gems: 2, desc: 'ภูติตัวจิ๋วมีปีกโปร่งแสง บินเคียงข้างให้กำลังใจ' },
    'pet_pegasus': { id: 'pet_pegasus', slot: 'pet', rarity: 'legendary', name: 'ม้าเพกาซัสน้อยมีปีกสายรุ้ง', price: 380, gems: 5, desc: 'ม้าบินขนสีขาวนุ่มมีปีกสีรุ้ง บินช่วยเก็บเหรียญ' },
    'pet_dog': { id: 'pet_dog', slot: 'pet', rarity: 'rare', name: 'ลูกหมาปั๊กแสนรู้', price: 100, gems: 1, desc: 'เห่าให้กำลังใจตอนทำข้อสอบ' },
    'pet_cat': { id: 'pet_cat', slot: 'pet', rarity: 'rare', name: 'แมวส้มอัจฉริยะ', price: 120, gems: 1, desc: 'ช่วยสะกิดเตือนถ้าตอบผิด' },
    'pet_penguin': { id: 'pet_penguin', slot: 'pet', rarity: 'rare', name: 'เพนกวินสุภาพบุรุษ', price: 160, gems: 2, desc: 'ยืนปรบมือเมื่อทำข้อสอบถูก' },
    'pet_lion': { id: 'pet_lion', slot: 'pet', rarity: 'epic', name: 'ลูกสิงโตเจ้าป่า', price: 250, gems: 3, desc: 'คำรามข่มขวัญบอสข้อสอบ' },
    'pet_dragon': { id: 'pet_dragon', slot: 'pet', rarity: 'legendary', name: 'มังกรแดงตัวจิ๋ว', price: 380, gems: 5, desc: 'พ่นไฟช่วยโจมตีบอส' },
    'pet_unicorn': { id: 'pet_unicorn', slot: 'pet', rarity: 'legendary', name: 'ยูนิคอร์นสายรุ้ง', price: 550, gems: 8, desc: 'เปล่งประกายสีรุ้งนำโชค' },

    // AURAS
    'aura_none': { id: 'aura_none', slot: 'aura', rarity: 'common', name: 'ออร่าปกติ', price: 0, gems: 0, desc: '' },
    'aura_sparkle': { id: 'aura_sparkle', slot: 'aura', rarity: 'rare', name: 'ละอองดาวระยิบระยับ', price: 80, gems: 1, desc: 'มีดาวลอยรอบตัวตลอดเวลา' },
    'aura_fire': { id: 'aura_fire', slot: 'aura', rarity: 'epic', name: 'เปลวเพลิงนักสู้', price: 180, gems: 2, desc: 'ไฟลุกโชนเมื่อทำคอมโบ' },
    'aura_wings': { id: 'aura_wings', slot: 'aura', rarity: 'legendary', name: 'ปีกเทวดาสีทอง', price: 320, gems: 4, desc: 'ติดปีกโบยบินสู่คะแนนเต็ม' },
    'aura_saiyan': { id: 'aura_saiyan', slot: 'aura', rarity: 'legendary', name: 'ซูเปอร์ออร่าสายฟ้าเทพ', price: 600, gems: 10, desc: 'สายฟ้าฟาดรอบตัว เท่ที่สุด!' }
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
  // Using version 3 to reset old test data cleanly!
  const STORAGE_KEY = 'diamond_hero_save_v4';

  // Wipe old test caches on first v4 boot
  (function initCleanState() {
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.removeItem('diamond_hero_save_v3');
      localStorage.removeItem('diamond_hero_save_v2');
      localStorage.removeItem('diamond_hero_save_v1');
      localStorage.removeItem('diamond_exam_history');
      localStorage.removeItem('diamond_cleared_quests');
      localStorage.removeItem('diamond_total_stars');
    }
  })();

  function getDefaultSave() {
    return {
      name: 'น้องไดมอนด์',
      level: 1,
      xp: 0,
      coins: 150, // Welcoming starter bonus!
      gems: 5,
      equipped: {
        hero: 'hero_princess', // Default to lovely Princess Diamond!
        hat: 'hat_princess_tiara',
        suit: 'suit_princess_cinderella',
        weapon: 'wp_magic_star_scepter',
        pet: 'pet_none',
        aura: 'aura_sparkle'
      },
      inventory: [
        'hero_boy', 'hero_princess',
        'hat_cap', 'hat_princess_tiara',
        'suit_student', 'suit_princess_cinderella',
        'wp_pencil', 'wp_magic_star_scepter',
        'pet_none', 'aura_none', 'aura_sparkle'
      ],
      redeemedCoupons: [],
      customCoupons: []
    };
  }

  function loadSave() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        const init = getDefaultSave();
        writeSave(init);
        return init;
      }
      const data = JSON.parse(raw);
      if (!data.equipped) data.equipped = getDefaultSave().equipped;
      if (!data.inventory) data.inventory = getDefaultSave().inventory;
      return data;
    } catch (e) {
      return getDefaultSave();
    }
  }

  function writeSave(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      // Trigger live update across any open UI elements
      if (typeof window.syncHeroData === 'function') window.syncHeroData();
      if (typeof window.syncPortalHero === 'function') window.syncPortalHero();
    } catch (e) {}
  }

  // --- 4. WEB AUDIO SYNTHESIZER ---
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
      } else if (type === 'hit' || type === 'wrong') {
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.exponentialRampToValueAtTime(90, now + 0.22);
        g.gain.setValueAtTime(0.25, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(g); g.connect(audioCtx.destination);
        osc.start(now); osc.stop(now + 0.25);
      } else if (type === 'correct') {
        [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
          const osc = audioCtx.createOscillator();
          const g = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now + i * 0.07);
          g.gain.setValueAtTime(0.18, now + i * 0.07);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.25);
          osc.connect(g); g.connect(audioCtx.destination);
          osc.start(now + i * 0.07); osc.stop(now + i * 0.07 + 0.25);
        });
      } else if (type === 'slash') {
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.15);
        g.gain.setValueAtTime(0.2, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.connect(g); g.connect(audioCtx.destination);
        osc.start(now); osc.stop(now + 0.18);
      } else if (type === 'boss_defeat' || type === 'victory') {
        [523.25, 659.25, 783.99, 1046.5, 1318.51].forEach((f, i) => {
          const osc = audioCtx.createOscillator();
          const g = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now + i * 0.09);
          g.gain.setValueAtTime(0.25, now + i * 0.09);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.09 + 0.45);
          osc.connect(g); g.connect(audioCtx.destination);
          osc.start(now + i * 0.09); osc.stop(now + i * 0.09 + 0.45);
        });
      } else if (type === 'levelup') {
        [440, 554.37, 659.25, 880].forEach((f, i) => {
          const osc = audioCtx.createOscillator();
          const g = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now + i * 0.08);
          g.gain.setValueAtTime(0.25, now + i * 0.08);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.35);
          osc.connect(g); g.connect(audioCtx.destination);
          osc.start(now + i * 0.08); osc.stop(now + i * 0.08 + 0.35);
        });
      } else if (type === 'buy') {
        [659.25, 880, 1046.5].forEach((f, i) => {
          const osc = audioCtx.createOscillator();
          const g = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now + i * 0.06);
          g.gain.setValueAtTime(0.22, now + i * 0.06);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.28);
          osc.connect(g); g.connect(audioCtx.destination);
          osc.start(now + i * 0.06); osc.stop(now + i * 0.06 + 0.28);
        });
      }
    } catch (e) {}
  }

  // --- 5. CANVAFETTI GENERATOR ---
  function launchConfetti() {
    try {
      const c = document.createElement('canvas');
      c.style.position = 'fixed';
      c.style.inset = '0';
      c.style.width = '100vw';
      c.style.height = '100vh';
      c.style.zIndex = '999999';
      c.style.pointerEvents = 'none';
      document.body.appendChild(c);
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      const ctx = c.getContext('2d');

      const particles = [];
      const colors = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#fbbf24'];
      for (let i = 0; i < 90; i++) {
        particles.push({
          x: c.width / 2,
          y: c.height / 2 - 60,
          vx: (Math.random() - 0.5) * 18,
          vy: (Math.random() - 0.8) * 20,
          size: Math.random() * 9 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          dr: (Math.random() - 0.5) * 12
        });
      }

      let frame = 0;
      function animate() {
        ctx.clearRect(0, 0, c.width, c.height);
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.38;
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

  // --- 6. PURE VECTOR SVG HERO GENERATOR ---
  function renderHeroSVG(equipped, size = 120) {
    if (!equipped) equipped = getDefaultSave().equipped;
    const heroId = equipped.hero || 'hero_boy';
    const hatId = equipped.hat || 'hat_cap';
    const suitId = equipped.suit || 'suit_student';
    const wpId = equipped.weapon || 'wp_pencil';
    const petId = equipped.pet || 'pet_none';
    const auraId = equipped.aura || 'aura_none';

    // Unique IDs for SVG filters to avoid collisions
    const uid = Math.random().toString(36).substring(2, 7);

    // Hero Base Skin & Hair Colors
    let isFemale = (heroId === 'hero_princess' || heroId === 'hero_magical_girl');
    let hairColor = '#6b4226'; // Brown
    let hairHighlight = '#92400e';
    let skinColor = '#fed7aa'; // Cute warm anime skin
    let skinShadow = '#fcd34d';
    let eyeColor = '#1e3a8a';
    let armorColor = '#94a3b8';

    if (heroId === 'hero_princess') {
      hairColor = '#d97706'; // Radiant honey golden amber hair
      hairHighlight = '#fef08a';
      skinColor = '#ffedd5'; // Soft fair porcelain skin
      skinShadow = '#fed7aa';
      eyeColor = '#7c3aed'; // Enchanting sparkling amethyst/violet eyes
    } else if (heroId === 'hero_magical_girl') {
      hairColor = '#f43f5e'; // Vibrant sakura pink
      hairHighlight = '#fbcfe8';
      skinColor = '#ffedd5';
      skinShadow = '#fed7aa';
      eyeColor = '#ec4899';
    } else if (heroId === 'hero_safari') {
      hairColor = '#451a03'; hairHighlight = '#78350f';
    } else if (heroId === 'hero_knight') {
      hairColor = '#d97706'; hairHighlight = '#fef08a';
    } else if (heroId === 'hero_wizard') {
      hairColor = '#4c1d95'; hairHighlight = '#c084fc';
    } else if (heroId === 'hero_cyber') {
      hairColor = '#06b6d4'; hairHighlight = '#67e8f9'; skinColor = '#e2e8f0'; skinShadow = '#94a3b8';
    } else if (heroId === 'hero_super') {
      hairColor = '#f59e0b'; hairHighlight = '#fef08a';
    }

    // SVG Layers
    // 1. AURA LAYER
    let auraSVG = '';
    if (auraId === 'aura_sparkle') {
      auraSVG = `
        <g opacity="0.9">
          <path d="M 40 45 L 43 55 L 53 58 L 43 61 L 40 71 L 37 61 L 27 58 L 37 55 Z" fill="#fde047" />
          <path d="M 160 50 L 162 57 L 169 59 L 162 61 L 160 68 L 158 61 L 151 59 L 158 57 Z" fill="#facc15" />
          <path d="M 150 135 L 152 140 L 157 142 L 152 144 L 150 149 L 148 144 L 143 142 L 148 140 Z" fill="#67e8f9" />
          <path d="M 45 130 L 47 134 L 51 136 L 47 138 L 45 142 L 43 138 L 39 136 L 43 134 Z" fill="#f472b6" />
          <circle cx="50" cy="110" r="3.5" fill="#fde047" opacity="0.8"/>
          <circle cx="165" cy="95" r="4" fill="#fbcfe8" opacity="0.8"/>
          <circle cx="95" cy="25" r="3" fill="#67e8f9" opacity="0.9"/>
        </g>
      `;
    } else if (auraId === 'aura_fire') {
      auraSVG = `
        <g opacity="0.85">
          <path d="M 60 170 Q 50 110 75 90 Q 70 120 85 80 Q 90 125 100 65 Q 110 125 115 80 Q 130 120 125 90 Q 150 110 140 170 Z" fill="url(#fireGrad_${uid})" />
          <path d="M 75 170 Q 70 130 85 110 Q 95 130 100 95 Q 105 130 115 110 Q 130 130 125 170 Z" fill="#fde047" opacity="0.9" />
        </g>
      `;
    } else if (auraId === 'aura_wings') {
      auraSVG = `
        <g opacity="0.92">
          <!-- Left Wing -->
          <path d="M 85 105 C 50 70 20 60 10 95 C 5 115 25 130 45 125 C 25 135 30 150 55 142 C 40 155 55 165 85 135 Z" fill="url(#wingGrad_${uid})" stroke="#fef08a" stroke-width="1.5" />
          <!-- Right Wing -->
          <path d="M 115 105 C 150 70 180 60 190 95 C 195 115 175 130 155 125 C 175 135 170 150 145 142 C 160 155 145 165 115 135 Z" fill="url(#wingGrad_${uid})" stroke="#fef08a" stroke-width="1.5" />
        </g>
      `;
    } else if (auraId === 'aura_saiyan') {
      auraSVG = `
        <g stroke="#38bdf8" stroke-width="3" fill="none" opacity="0.9" stroke-linecap="round">
          <path d="M 45 160 L 55 130 L 40 115 L 60 85 L 50 50" />
          <path d="M 155 160 L 145 130 L 160 115 L 140 85 L 150 50" />
          <path d="M 75 45 L 85 25 L 95 35 L 105 20 L 115 35 L 125 25" stroke="#facc15" stroke-width="2.5" />
        </g>
      `;
    }

    // 2. CAPE / BACK LAYER (BEHIND CHARACTER)
    let capeSVG = '';
    if (suitId === 'suit_cape_red') {
      capeSVG = `<path d="M 75 110 L 50 172 Q 100 185 150 172 L 125 110 Z" fill="#dc2626" stroke="#991b1b" stroke-width="2" />`;
    } else if (suitId === 'suit_royal') {
      capeSVG = `<path d="M 72 108 L 45 175 Q 100 190 155 175 L 128 108 Z" fill="#7e22ce" stroke="#facc15" stroke-width="3" />`;
    } else if (suitId === 'suit_princess_ice_crystal') {
      // Translucent Elsa snowflake cape
      capeSVG = `
        <g opacity="0.75">
          <path d="M 74 110 L 32 185 Q 100 195 168 185 L 126 110 Z" fill="url(#iceCapeGrad_${uid})" stroke="#bae6fd" stroke-width="1.5"/>
          <!-- Delicate Snowflake Glyphs on Cape -->
          <circle cx="65" cy="155" r="2.5" fill="#ffffff" />
          <circle cx="135" cy="155" r="2.5" fill="#ffffff" />
          <polygon points="100,165 102,170 107,171 102,172 100,177 98,172 93,171 98,170" fill="#ffffff"/>
        </g>
      `;
    }

    // 2.5 FEMALE HERO LONG FLOWING HAIR (BEHIND SHOULDERS)
    let femaleBackHairSVG = '';
    if (isFemale) {
      if (heroId === 'hero_princess') {
        femaleBackHairSVG = `
          <!-- Princess Long Luxurious Flowing Hair -->
          <g>
            <!-- Left cascading locks -->
            <path d="M 72 65 C 45 85 40 145 62 165 C 72 150 68 105 78 85 Z" fill="${hairColor}" />
            <path d="M 60 85 C 50 115 52 145 62 158" stroke="${hairHighlight}" stroke-width="3" fill="none" stroke-linecap="round"/>
            <!-- Right cascading locks -->
            <path d="M 128 65 C 155 85 160 145 138 165 C 128 150 132 105 122 85 Z" fill="${hairColor}" />
            <path d="M 140 85 C 150 115 148 145 138 158" stroke="${hairHighlight}" stroke-width="3" fill="none" stroke-linecap="round"/>
          </g>
        `;
      } else if (heroId === 'hero_magical_girl') {
        femaleBackHairSVG = `
          <!-- Cute Anime Twin-Tails -->
          <g>
            <!-- Left Twin-tail -->
            <path d="M 68 70 C 40 80 32 135 52 155 C 60 140 55 100 70 85 Z" fill="${hairColor}" />
            <circle cx="68" cy="74" r="5" fill="#f43f5e" /> <!-- Ribbon Bobble -->
            <!-- Right Twin-tail -->
            <path d="M 132 70 C 160 80 168 135 148 155 C 140 140 145 100 130 85 Z" fill="${hairColor}" />
            <circle cx="132" cy="74" r="5" fill="#f43f5e" />
          </g>
        `;
      }
    }

    // 3. SUIT & TORSO LAYER (EXTRAVAGANT PRINCESS GOWNS & HERO GEAR)
    let torsoSVG = '';
    let isBallgown = suitId.startsWith('suit_princess_');

    if (suitId === 'suit_princess_cinderella') {
      // 🌟 Cinderella Starlight Crystal Ballgown
      torsoSVG = `
        <!-- Off-shoulder Cloud Puffs -->
        <ellipse cx="73" cy="112" rx="10" ry="7.5" fill="#bae6fd" stroke="#38bdf8" stroke-width="1.5"/>
        <ellipse cx="127" cy="112" rx="10" ry="7.5" fill="#bae6fd" stroke="#38bdf8" stroke-width="1.5"/>
        <!-- Royal Fitted Corset Bodice -->
        <polygon points="80,105 120,105 114,136 86,136" fill="url(#cindBodice_${uid})" stroke="#0284c7" stroke-width="1.8"/>
        <!-- Golden Center Gem & Embroidery -->
        <circle cx="100" cy="118" r="4.5" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
        <circle cx="100" cy="118" r="2.2" fill="#ffffff" />
        <path d="M 94 107 Q 100 114 106 107" stroke="#ffffff" stroke-width="1.8" fill="none" opacity="0.9"/>
        <!-- Huge Extravagant Puffy Layered Ballgown Skirt -->
        <path d="M 86 136 C 60 145 28 160 32 180 C 65 192 135 192 168 180 C 172 160 140 145 114 136 Z" fill="url(#cindSkirt_${uid})" stroke="#0284c7" stroke-width="2.5"/>
        <!-- Translucent Shimmering Peplum Petals -->
        <path d="M 86 136 Q 66 156 84 162 Q 95 146 100 136 Z" fill="#e0f2fe" opacity="0.88" stroke="#bae6fd" stroke-width="1"/>
        <path d="M 114 136 Q 134 156 116 162 Q 105 146 100 136 Z" fill="#e0f2fe" opacity="0.88" stroke="#bae6fd" stroke-width="1"/>
        <!-- Double Scalloped Sparkling White Lace Trim -->
        <path d="M 38 175 Q 54 167 70 175 Q 86 167 102 175 Q 118 167 134 175 Q 150 167 162 175" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
        <!-- Twinkling Diamond Star Sparkles -->
        <polygon points="65,155 67,159 71,160 67,161 65,165 63,161 59,160 63,159" fill="#fef08a"/>
        <polygon points="135,157 137,161 141,162 137,163 135,167 133,163 129,162 133,161" fill="#fef08a"/>
        <polygon points="100,166 101.5,169 104.5,170 101.5,171 100,174 98.5,171 95.5,170 98.5,169" fill="#ffffff"/>
      `;
    } else if (suitId === 'suit_princess_aurora') {
      // 🌹 Princess Aurora Rose-Gold & Ruby Royal Silk Gown
      torsoSVG = `
        <!-- Rose Silk Shoulder Ruffles -->
        <ellipse cx="73" cy="112" rx="10" ry="7.5" fill="#fbcfe8" stroke="#f43f5e" stroke-width="1.5"/>
        <ellipse cx="127" cy="112" rx="10" ry="7.5" fill="#fbcfe8" stroke="#f43f5e" stroke-width="1.5"/>
        <!-- Gold Embroidered Pink Bodice -->
        <polygon points="80,105 120,105 114,136 86,136" fill="url(#auroraBodice_${uid})" stroke="#be123c" stroke-width="1.8"/>
        <!-- Ruby Heart Brooch -->
        <polygon points="100,113 105,119 100,126 95,119" fill="#e11d48" stroke="#fde047" stroke-width="1.5"/>
        <!-- 3-Tier Layered Rose Ballgown Skirt -->
        <path d="M 86 136 C 60 145 28 160 32 180 C 65 192 135 192 168 180 C 172 160 140 145 114 136 Z" fill="url(#auroraSkirt_${uid})" stroke="#be123c" stroke-width="2.5"/>
        <!-- Layer 2 Petal Swag -->
        <path d="M 45 166 Q 72 152 100 166 Q 128 152 155 166" fill="none" stroke="#fde047" stroke-width="2.5"/>
        <!-- Golden Rose Hem Lace -->
        <path d="M 38 175 Q 54 168 70 175 Q 86 168 102 175 Q 118 168 134 175 Q 150 168 162 175" fill="none" stroke="#fef08a" stroke-width="3" stroke-linecap="round"/>
        <circle cx="70" cy="155" r="3" fill="#fde047"/>
        <circle cx="130" cy="155" r="3" fill="#fde047"/>
      `;
    } else if (suitId === 'suit_princess_ice_crystal') {
      // ❄️ Elsa Ice Queen Crystal Gown
      torsoSVG = `
        <!-- Translucent Crystal Off-shoulder Straps -->
        <ellipse cx="73" cy="112" rx="9" ry="7" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
        <ellipse cx="127" cy="112" rx="9" ry="7" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
        <!-- Ice Facet Bodice -->
        <polygon points="80,105 120,105 114,136 86,136" fill="url(#iceBodice_${uid})" stroke="#0284c7" stroke-width="1.8"/>
        <!-- Center Crystal Shard -->
        <polygon points="100,111 104,118 100,126 96,118" fill="#ffffff" stroke="#38bdf8" stroke-width="1.5"/>
        <!-- Flowing Crystal Skirt -->
        <path d="M 86 136 C 60 145 28 160 32 180 C 65 192 135 192 168 180 C 172 160 140 145 114 136 Z" fill="url(#iceSkirt_${uid})" stroke="#0284c7" stroke-width="2.5"/>
        <!-- Icy Crystal Flards along skirt -->
        <polygon points="65,148 70,172 60,172" fill="#ffffff" opacity="0.6"/>
        <polygon points="135,148 140,172 130,172" fill="#ffffff" opacity="0.6"/>
        <polygon points="100,146 106,174 94,174" fill="#ffffff" opacity="0.65"/>
        <path d="M 38 175 Q 54 167 70 175 Q 86 167 102 175 Q 118 167 134 175 Q 150 167 162 175" fill="none" stroke="#bae6fd" stroke-width="3" stroke-linecap="round"/>
      `;
    } else if (suitId === 'suit_princess_celestial') {
      // 🌌 Celestial Rainbow Queen Gown
      torsoSVG = `
        <!-- Gold Solar Pauldrons -->
        <circle cx="73" cy="112" r="8" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
        <circle cx="127" cy="112" r="8" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
        <!-- Galaxy Bodice -->
        <polygon points="80,105 120,105 114,136 86,136" fill="url(#celestialBodice_${uid})" stroke="#eab308" stroke-width="2"/>
        <polygon points="100,112 103,119 110,119 104,123 106,130 100,126 94,130 96,123 90,119 97,119" fill="#fde047"/>
        <!-- Wide Rainbow Starlight Ballgown Skirt -->
        <path d="M 86 136 C 60 145 28 160 32 180 C 65 192 135 192 168 180 C 172 160 140 145 114 136 Z" fill="url(#celestialSkirt_${uid})" stroke="#eab308" stroke-width="2.8"/>
        <!-- Floating Gold Constellation Arc -->
        <path d="M 45 166 Q 100 150 155 166" fill="none" stroke="#fde047" stroke-width="2.5" stroke-dasharray="6 4"/>
        <circle cx="55" cy="164" r="2.8" fill="#fde047"/>
        <circle cx="80" cy="158" r="2.8" fill="#fde047"/>
        <circle cx="120" cy="158" r="2.8" fill="#fde047"/>
        <circle cx="145" cy="164" r="2.8" fill="#fde047"/>
        <path d="M 38 175 Q 54 167 70 175 Q 86 167 102 175 Q 118 167 134 175 Q 150 167 162 175" fill="none" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
      `;
    } else if (suitId === 'suit_student') {
      torsoSVG = `
        <!-- White Shirt & Tie -->
        <rect x="80" y="105" width="40" height="42" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
        <path d="M 96 105 L 100 120 L 104 105 Z" fill="#ef4444" />
        <polygon points="98,120 102,120 104,138 100,143 96,138" fill="#ef4444" />
        <!-- Blue Shorts/Skirt -->
        <rect x="80" y="142" width="40" height="15" rx="3" fill="#1e3a8a" />
      `;
    } else if (suitId === 'suit_adventurer') {
      torsoSVG = `
        <rect x="78" y="105" width="44" height="44" rx="6" fill="#d97706" stroke="#78350f" stroke-width="2"/>
        <rect x="83" y="112" width="12" height="14" rx="2" fill="#b45309" />
        <rect x="105" y="112" width="12" height="14" rx="2" fill="#b45309" />
        <line x1="100" y1="105" x2="100" y2="149" stroke="#78350f" stroke-width="2"/>
        <rect x="80" y="145" width="40" height="14" rx="3" fill="#78350f" />
      `;
    } else if (suitId === 'suit_armor') {
      torsoSVG = `
        <rect x="78" y="105" width="44" height="44" rx="7" fill="url(#metalGrad_${uid})" stroke="#475569" stroke-width="2"/>
        <!-- Golden Chest Emblem -->
        <circle cx="100" cy="124" r="8" fill="#eab308" stroke="#ca8a04" stroke-width="1.5" />
        <path d="M 100 119 L 100 129 M 95 124 L 105 124" stroke="#78350f" stroke-width="2" stroke-linecap="round" />
        <rect x="80" y="145" width="40" height="14" rx="3" fill="#475569" />
      `;
    } else if (suitId === 'suit_space') {
      torsoSVG = `
        <rect x="78" y="105" width="44" height="45" rx="8" fill="#f1f5f9" stroke="#38bdf8" stroke-width="2.5"/>
        <rect x="88" y="115" width="24" height="16" rx="4" fill="#0f172a" />
        <circle cx="94" cy="123" r="2.5" fill="#22c55e" />
        <circle cx="102" cy="123" r="2.5" fill="#38bdf8" />
        <circle cx="106" cy="123" r="2.5" fill="#ef4444" />
        <rect x="80" y="146" width="40" height="14" rx="4" fill="#cbd5e1" />
      `;
    } else {
      // Default Stylish Hero T-Shirt
      torsoSVG = `
        <rect x="80" y="105" width="40" height="42" rx="6" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
        <path d="M 94 118 L 100 112 L 106 118 L 103 130 L 97 130 Z" fill="#ffd166" />
        <rect x="80" y="142" width="40" height="15" rx="3" fill="#1e293b" />
      `;
    }

    // 4. HATS, TIARAS & CROWNS LAYER
    let hatSVG = '';
    if (hatId === 'hat_princess_tiara') {
      // 👑 Diamond Princess Tiara
      hatSVG = `
        <g>
          <!-- Ornate Golden Tiara Base Arch -->
          <path d="M 74 62 Q 100 50 126 62" stroke="#facc15" stroke-width="3" fill="none" stroke-linecap="round"/>
          <!-- 5 Diamond Crest Peaks -->
          <polygon points="76,61 80,48 85,58" fill="url(#goldGrad_${uid})" stroke="#b45309" stroke-width="1.2"/>
          <polygon points="85,58 92,42 98,55" fill="url(#goldGrad_${uid})" stroke="#b45309" stroke-width="1.2"/>
          <polygon points="96,55 100,32 104,55" fill="url(#goldGrad_${uid})" stroke="#b45309" stroke-width="1.5"/>
          <polygon points="102,55 108,42 115,58" fill="url(#goldGrad_${uid})" stroke="#b45309" stroke-width="1.2"/>
          <polygon points="115,58 120,48 124,61" fill="url(#goldGrad_${uid})" stroke="#b45309" stroke-width="1.2"/>
          <!-- Sparkling Gems -->
          <circle cx="100" cy="34" r="3.2" fill="#ffffff" stroke="#38bdf8" stroke-width="1"/>
          <!-- Ruby Heart Drop in center -->
          <polygon points="100,44 103.5,49 100,55 96.5,49" fill="#e11d48" stroke="#facc15" stroke-width="1"/>
          <circle cx="92" cy="44" r="2" fill="#38bdf8"/>
          <circle cx="108" cy="44" r="2" fill="#38bdf8"/>
          <circle cx="80" cy="50" r="1.8" fill="#ffffff"/>
          <circle cx="120" cy="50" r="1.8" fill="#ffffff"/>
        </g>
      `;
    } else if (hatId === 'hat_flower_coronet') {
      // 🌸 Enchanted Flower Coronet
      hatSVG = `
        <g>
          <path d="M 75 62 Q 100 52 125 62" stroke="#16a34a" stroke-width="2.5" fill="none"/>
          <!-- Sakura & Rose Blossoms -->
          <circle cx="80" cy="59" r="4.5" fill="#f472b6" />
          <circle cx="80" cy="59" r="2" fill="#fde047" />
          <circle cx="90" cy="55" r="4.5" fill="#fbcfe8" />
          <circle cx="90" cy="55" r="2" fill="#f43f5e" />
          <circle cx="100" cy="53" r="5.5" fill="#f43f5e" />
          <circle cx="100" cy="53" r="2.5" fill="#fde047" />
          <circle cx="110" cy="55" r="4.5" fill="#fbcfe8" />
          <circle cx="110" cy="55" r="2" fill="#f43f5e" />
          <circle cx="120" cy="59" r="4.5" fill="#f472b6" />
          <circle cx="120" cy="59" r="2" fill="#fde047" />
        </g>
      `;
    } else if (hatId === 'hat_royal_veil') {
      // 👰 Golden Royal Veil
      hatSVG = `
        <g>
          <!-- Flowing sheer pink/white veil draping behind -->
          <path d="M 75 58 C 55 75 48 135 60 160 Q 100 170 140 160 C 152 135 145 75 125 58 Z" fill="#fdf2f8" opacity="0.65" stroke="#fbcfe8" stroke-width="1.5"/>
          <path d="M 75 60 Q 100 50 125 60" stroke="#facc15" stroke-width="3" fill="none"/>
          <circle cx="100" cy="54" r="3.5" fill="#facc15"/>
          <circle cx="88" cy="56" r="2.5" fill="#fbcfe8"/>
          <circle cx="112" cy="56" r="2.5" fill="#fbcfe8"/>
        </g>
      `;
    } else if (hatId === 'hat_crystal_crown') {
      // ❄️ Ice Crystal Queen Crown
      hatSVG = `
        <g>
          <polygon points="76,62 82,36 90,52 100,26 110,52 118,36 124,62" fill="url(#iceCrownGrad_${uid})" stroke="#38bdf8" stroke-width="1.8" />
          <polygon points="98,34 100,28 102,34 100,44" fill="#ffffff" />
          <circle cx="100" cy="48" r="3.5" fill="#0284c7" stroke="#ffffff" stroke-width="1"/>
          <circle cx="85" cy="54" r="2" fill="#ffffff"/>
          <circle cx="115" cy="54" r="2" fill="#ffffff"/>
        </g>
      `;
    } else if (hatId === 'hat_cap') {
      hatSVG = `
        <!-- Sport Baseball Cap -->
        <path d="M 78 62 Q 100 40 122 62 Q 120 70 80 70 Z" fill="#dc2626" stroke="#991b1b" stroke-width="2"/>
        <path d="M 80 66 Q 100 68 135 62 Q 120 74 85 70 Z" fill="#b91c1c" />
        <circle cx="100" cy="46" r="3" fill="#fde047" />
      `;
    } else if (hatId === 'hat_cowboy') {
      hatSVG = `
        <path d="M 82 56 Q 100 32 118 56 Z" fill="#92400e" stroke="#78350f" stroke-width="2"/>
        <path d="M 60 62 Q 100 52 140 62 Q 135 70 65 70 Z" fill="#78350f" />
        <rect x="84" y="54" width="32" height="4" fill="#f59e0b" />
        <polygon points="100,53 102,56 105,56 102,58 103,61 100,59 97,61 98,58 95,56 98,56" fill="#fef08a" />
      `;
    } else if (hatId === 'hat_detective') {
      hatSVG = `
        <path d="M 76 64 Q 100 42 124 64 Z" fill="#78716c" stroke="#44403c" stroke-width="2"/>
        <path d="M 68 66 Q 100 58 132 66 Q 126 72 74 72 Z" fill="#57534e" />
        <ellipse cx="100" cy="48" rx="4" ry="2" fill="#a8a29e" />
      `;
    } else if (hatId === 'hat_viking') {
      hatSVG = `
        <path d="M 76 65 Q 100 48 124 65 Z" fill="url(#metalGrad_${uid})" stroke="#334155" stroke-width="2"/>
        <line x1="78" y1="65" x2="122" y2="65" stroke="#eab308" stroke-width="3"/>
        <path d="M 78 58 Q 60 55 58 35 Q 68 45 80 54 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />
        <path d="M 122 58 Q 140 55 142 35 Q 132 45 120 54 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />
      `;
    } else if (hatId === 'hat_chef') {
      hatSVG = `
        <path d="M 80 62 C 65 30 135 30 120 62 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
        <rect x="82" y="58" width="36" height="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
      `;
    } else if (hatId === 'hat_crown_silver') {
      hatSVG = `
        <polygon points="76,64 80,44 90,54 100,38 110,54 120,44 124,64" fill="url(#silverGrad_${uid})" stroke="#475569" stroke-width="2" />
        <circle cx="100" cy="54" r="3.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
        <circle cx="85" cy="58" r="2" fill="#0284c7"/>
        <circle cx="115" cy="58" r="2" fill="#0284c7"/>
      `;
    } else if (hatId === 'hat_crown_gold') {
      hatSVG = `
        <polygon points="74,65 78,40 90,52 100,34 110,52 122,40 126,65" fill="url(#goldGrad_${uid})" stroke="#b45309" stroke-width="2" />
        <circle cx="100" cy="52" r="4.5" fill="#dc2626" stroke="#fde047" stroke-width="1.5"/>
        <circle cx="86" cy="57" r="2.8" fill="#16a34a"/>
        <circle cx="114" cy="57" r="2.8" fill="#16a34a"/>
      `;
    } else if (hatId === 'hat_crown_diamond') {
      hatSVG = `
        <polygon points="74,65 77,38 90,50 100,32 110,50 123,38 126,65" fill="url(#diamondGrad_${uid})" stroke="#0284c7" stroke-width="2" />
        <polygon points="95,48 100,42 105,48 100,56" fill="#ffffff" opacity="0.9" />
        <circle cx="78" cy="38" r="2.5" fill="#fde047"/>
        <circle cx="100" cy="32" r="3" fill="#fde047"/>
        <circle cx="122" cy="38" r="2.5" fill="#fde047"/>
      `;
    }

    // 5. WEAPONS, SCEPTERS & WANDS (HELD IN RIGHT HAND)
    let weaponSVG = '';
    if (wpId === 'wp_magic_star_scepter') {
      // 🌟 Crystal Star Royal Scepter
      weaponSVG = `
        <g transform="translate(130, 80) rotate(16)">
          <line x1="12" y1="20" x2="12" y2="70" stroke="url(#goldGrad_${uid})" stroke-width="4.5" stroke-linecap="round"/>
          <!-- Crystal Wing Accents on Staff -->
          <path d="M 6 25 Q 0 16 6 12 Q 12 18 12 25" fill="#bae6fd" stroke="#38bdf8" stroke-width="1.2"/>
          <path d="M 18 25 Q 24 16 18 12 Q 12 18 12 25" fill="#bae6fd" stroke="#38bdf8" stroke-width="1.2"/>
          <!-- Brilliant 5-Point Crystal Star -->
          <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill="#fde047" stroke="#eab308" stroke-width="1.5"/>
          <circle cx="12" cy="11" r="3.5" fill="#ffffff" />
          <circle cx="12" cy="70" r="3" fill="#facc15" />
        </g>
      `;
    } else if (wpId === 'wp_sakura_wand') {
      // 🌸 Sakura Heart Wand
      weaponSVG = `
        <g transform="translate(130, 80) rotate(18)">
          <line x1="12" y1="20" x2="12" y2="68" stroke="#f472b6" stroke-width="4" stroke-linecap="round"/>
          <path d="M 12 22 Q 4 14 6 6 Q 12 6 12 14 Q 12 6 18 6 Q 20 14 12 22 Z" fill="#ec4899" stroke="#be123c" stroke-width="1.5"/>
          <circle cx="12" cy="12" r="3" fill="#fde047"/>
          <path d="M 8 26 Q 4 34 10 38" stroke="#fbcfe8" stroke-width="2" fill="none"/>
          <path d="M 16 26 Q 20 34 14 38" stroke="#fbcfe8" stroke-width="2" fill="none"/>
        </g>
      `;
    } else if (wpId === 'wp_diamond_heart') {
      // 💎 Imperial Diamond Heart Scepter
      weaponSVG = `
        <g transform="translate(128, 76) rotate(15)">
          <line x1="14" y1="24" x2="14" y2="74" stroke="url(#goldGrad_${uid})" stroke-width="5" stroke-linecap="round"/>
          <!-- Giant Faceted Diamond Heart -->
          <path d="M 14 24 C 2 12 2 -4 14 8 C 26 -4 26 12 14 24 Z" fill="url(#diamondGrad_${uid})" stroke="#0284c7" stroke-width="2"/>
          <polygon points="14,2 17,8 14,14 11,8" fill="#ffffff" opacity="0.9"/>
          <circle cx="14" cy="24" r="3.5" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
          <circle cx="14" cy="74" r="3.5" fill="#facc15"/>
        </g>
      `;
    } else if (wpId === 'wp_pencil') {
      weaponSVG = `
        <g transform="translate(132, 90) rotate(22)">
          <polygon points="6,0 12,0 9,12" fill="#fef08a" stroke="#78350f" stroke-width="1"/>
          <rect x="6" y="12" width="6" height="38" fill="#eab308" stroke="#78350f" stroke-width="1"/>
          <rect x="6" y="50" width="6" height="8" fill="#cbd5e1"/>
          <rect x="6" y="58" width="6" height="8" rx="2" fill="#f43f5e"/>
          <polygon points="9,-4 11,-1 14,-1 11,2 13,5 9,3 6,5 7,2 5,-1 8,-1" fill="#fde047"/>
        </g>
      `;
    } else if (wpId === 'wp_magnifier') {
      weaponSVG = `
        <g transform="translate(132, 95)">
          <circle cx="14" cy="14" r="12" fill="#38bdf8" opacity="0.6" stroke="#eab308" stroke-width="3"/>
          <path d="M 8 10 Q 14 6 18 10" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.8"/>
          <line x1="23" y1="23" x2="36" y2="36" stroke="#78350f" stroke-width="5" stroke-linecap="round"/>
        </g>
      `;
    } else if (wpId === 'wp_wand') {
      weaponSVG = `
        <g transform="translate(132, 85) rotate(18)">
          <line x1="10" y1="18" x2="10" y2="60" stroke="#78350f" stroke-width="4" stroke-linecap="round"/>
          <polygon points="10,4 13,11 20,11 15,16 17,23 10,19 4,23 6,16 1,11 8,11" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
          <circle cx="10" cy="13" r="3" fill="#ffffff" />
        </g>
      `;
    } else if (wpId === 'wp_sword') {
      weaponSVG = `
        <g transform="translate(132, 75) rotate(24)">
          <rect x="8" y="-5" width="6" height="52" rx="3" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5" />
          <line x1="11" y1="-2" x2="11" y2="44" stroke="#ffffff" stroke-width="2"/>
          <rect x="2" y="47" width="18" height="5" rx="2" fill="#eab308"/>
          <rect x="8" y="52" width="6" height="14" fill="#475569"/>
          <circle cx="11" cy="68" r="3.5" fill="#eab308"/>
        </g>
      `;
    } else if (wpId === 'wp_hammer') {
      weaponSVG = `
        <g transform="translate(130, 80) rotate(20)">
          <rect x="0" y="8" width="28" height="18" rx="3" fill="url(#metalGrad_${uid})" stroke="#334155" stroke-width="2"/>
          <line x1="14" y1="26" x2="14" y2="60" stroke="#78350f" stroke-width="4" stroke-linecap="round"/>
          <polygon points="14,11 10,17 14,17 13,23 18,16 14,16" fill="#fde047"/>
        </g>
      `;
    } else if (wpId === 'wp_trophy') {
      weaponSVG = `
        <g transform="translate(126, 92)">
          <path d="M 6 4 Q 6 22 18 22 Q 30 22 30 4 Z" fill="url(#goldGrad_${uid})" stroke="#b45309" stroke-width="2"/>
          <path d="M 6 8 Q -1 12 6 16" fill="none" stroke="#b45309" stroke-width="2.5"/>
          <path d="M 30 8 Q 37 12 30 16" fill="none" stroke="#b45309" stroke-width="2.5"/>
          <rect x="15" y="22" width="6" height="8" fill="#eab308"/>
          <rect x="10" y="30" width="16" height="8" rx="2" fill="#78350f"/>
          <polygon points="18,7 19.5,10.5 23,10.5 20,13 21.5,16.5 18,14 14.5,16.5 16,13 13,10.5 16.5,10.5" fill="#fef08a"/>
        </g>
      `;
    }

    // 6. PET COMPANIONS LAYER
    let petSVG = '';
    if (petId === 'pet_fairy') {
      // 🧚 Sparkle Crystal Fairy
      petSVG = `
        <g transform="translate(26, 118)">
          <!-- Glowing Aura & Wings -->
          <ellipse cx="20" cy="18" rx="10" ry="16" fill="#bae6fd" opacity="0.65" transform="rotate(-25, 20, 18)"/>
          <ellipse cx="28" cy="18" rx="10" ry="16" fill="#bae6fd" opacity="0.65" transform="rotate(25, 28, 18)"/>
          <!-- Fairy Body & Little Dress -->
          <circle cx="24" cy="16" r="6" fill="#fef08a" stroke="#f59e0b" stroke-width="1"/>
          <circle cx="24" cy="10" r="5" fill="#ffedd5"/>
          <circle cx="22" cy="9" r="0.8" fill="#000"/>
          <circle cx="26" cy="9" r="0.8" fill="#000"/>
          <polygon points="21,14 27,14 24,22" fill="#f472b6"/>
          <!-- Fairy Tiny Star Wand -->
          <line x1="28" y1="12" x2="36" y2="6" stroke="#facc15" stroke-width="1.5"/>
          <polygon points="36,4 37,6 39,6 37.5,7.5 38,9.5 36,8 34,9.5 34.5,7.5 33,6 35,6" fill="#fde047"/>
        </g>
      `;
    } else if (petId === 'pet_pegasus') {
      // 🦄 Baby Rainbow Pegasus
      petSVG = `
        <g transform="translate(26, 122)">
          <ellipse cx="22" cy="28" rx="14" ry="12" fill="#ffffff" stroke="#fbcfe8" stroke-width="1.5"/>
          <circle cx="18" cy="15" r="9.5" fill="#ffffff" stroke="#fbcfe8" stroke-width="1"/>
          <!-- Little Pegasus Wings -->
          <path d="M 24 22 C 22 10 36 6 38 18 C 36 24 30 24 24 22 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.2"/>
          <!-- Rainbow Golden Horn -->
          <polygon points="17,8 20,-3 22,8" fill="#facc15" stroke="#f59e0b" stroke-width="1"/>
          <!-- Pastel Rainbow Mane -->
          <path d="M 22 8 Q 28 12 25 22" stroke="#f472b6" stroke-width="3" fill="none" stroke-linecap="round"/>
          <circle cx="16" cy="14" r="1.5" fill="#701a75"/>
          <circle cx="16" cy="13.5" r="0.6" fill="#ffffff"/>
        </g>
      `;
    } else if (petId === 'pet_dog') {
      petSVG = `
        <g transform="translate(32, 130)">
          <ellipse cx="20" cy="24" rx="14" ry="12" fill="#d97706" />
          <circle cx="18" cy="12" r="10" fill="#f59e0b" />
          <ellipse cx="9" cy="14" rx="4" ry="8" fill="#b45309" />
          <ellipse cx="27" cy="14" rx="4" ry="8" fill="#b45309" />
          <circle cx="15" cy="10" r="1.5" fill="#000" />
          <circle cx="21" cy="10" r="1.5" fill="#000" />
          <circle cx="18" cy="14" r="1.8" fill="#451a03" />
          <path d="M 32 20 Q 38 12 34 8" fill="none" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
        </g>
      `;
    } else if (petId === 'pet_cat') {
      petSVG = `
        <g transform="translate(32, 130)">
          <ellipse cx="20" cy="24" rx="13" ry="11" fill="#ea580c" />
          <circle cx="19" cy="13" r="9.5" fill="#f97316" />
          <polygon points="11,10 13,2 17,8" fill="#c2410c" />
          <polygon points="21,8 25,2 27,10" fill="#c2410c" />
          <circle cx="16" cy="12" r="1.5" fill="#000" />
          <circle cx="22" cy="12" r="1.5" fill="#000" />
          <polygon points="18,15 20,15 19,16.5" fill="#fbcfe8" />
          <path d="M 32 22 Q 40 18 36 10" fill="none" stroke="#ea580c" stroke-width="3" stroke-linecap="round"/>
        </g>
      `;
    } else if (petId === 'pet_penguin') {
      petSVG = `
        <g transform="translate(35, 130)">
          <ellipse cx="18" cy="22" rx="12" ry="15" fill="#0f172a" />
          <ellipse cx="18" cy="23" rx="8" ry="11" fill="#f8fafc" />
          <circle cx="15" cy="14" r="1.5" fill="#000"/>
          <circle cx="21" cy="14" r="1.5" fill="#000"/>
          <polygon points="16,16 20,16 18,19" fill="#f59e0b"/>
          <polygon points="16,24 20,24 18,26" fill="#ef4444"/>
        </g>
      `;
    } else if (petId === 'pet_lion') {
      petSVG = `
        <g transform="translate(30, 126)">
          <circle cx="20" cy="14" r="14" fill="#b45309" />
          <ellipse cx="20" cy="26" rx="13" ry="11" fill="#f59e0b" />
          <circle cx="20" cy="14" r="9.5" fill="#fbbf24" />
          <circle cx="17" cy="12" r="1.5" fill="#000"/>
          <circle cx="23" cy="12" r="1.5" fill="#000"/>
          <ellipse cx="20" cy="16" rx="2" ry="1.5" fill="#78350f"/>
        </g>
      `;
    } else if (petId === 'pet_dragon') {
      petSVG = `
        <g transform="translate(30, 124)">
          <ellipse cx="20" cy="26" rx="12" ry="12" fill="#dc2626" />
          <circle cx="18" cy="14" r="10" fill="#ef4444" />
          <polygon points="12,8 14,2 17,7" fill="#facc15" />
          <polygon points="20,7 23,2 25,8" fill="#facc15" />
          <path d="M 28 22 Q 40 14 36 26 Z" fill="#b91c1c" />
          <circle cx="15" cy="13" r="1.8" fill="#fde047"/>
          <circle cx="15" cy="13" r="0.9" fill="#000"/>
          <circle cx="8" cy="15" r="2.5" fill="#f59e0b" opacity="0.8"/>
        </g>
      `;
    } else if (petId === 'pet_unicorn') {
      petSVG = `
        <g transform="translate(30, 124)">
          <ellipse cx="20" cy="26" rx="13" ry="12" fill="#fdf4ff" stroke="#e879f9" stroke-width="1.5"/>
          <circle cx="18" cy="14" r="9.5" fill="#ffffff" stroke="#e879f9" stroke-width="1"/>
          <polygon points="17,8 20,-3 22,8" fill="#facc15" stroke="#f59e0b" stroke-width="1"/>
          <path d="M 22 8 Q 28 12 24 22" stroke="#38bdf8" stroke-width="3" fill="none" stroke-linecap="round"/>
          <circle cx="16" cy="13" r="1.6" fill="#701a75"/>
        </g>
      `;
    }

    // MAIN COMPOSITE SVG STRING
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="display:block; overflow:visible; filter:drop-shadow(0 6px 12px rgba(0,0,0,0.18));">
        <defs>
          <linearGradient id="runeGrad_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#818cf8" stop-opacity="0.2"/>
          </linearGradient>
          <linearGradient id="metalGrad_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f8fafc"/>
            <stop offset="50%" stop-color="#94a3b8"/>
            <stop offset="100%" stop-color="#475569"/>
          </linearGradient>
          <linearGradient id="silverGrad_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#94a3b8"/>
          </linearGradient>
          <linearGradient id="goldGrad_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="50%" stop-color="#eab308"/>
            <stop offset="100%" stop-color="#ca8a04"/>
          </linearGradient>
          <linearGradient id="diamondGrad_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#e0f2fe"/>
            <stop offset="50%" stop-color="#38bdf8"/>
            <stop offset="100%" stop-color="#0284c7"/>
          </linearGradient>
          <linearGradient id="wingGrad_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fef9c3"/>
            <stop offset="100%" stop-color="#f59e0b"/>
          </linearGradient>
          <linearGradient id="fireGrad_${uid}" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#ef4444"/>
            <stop offset="60%" stop-color="#f97316"/>
            <stop offset="100%" stop-color="#fde047"/>
          </linearGradient>

          <!-- PRINCESS EXTRAVAGANT GOWN GRADIENTS -->
          <linearGradient id="cindBodice_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#7dd3fc"/>
            <stop offset="50%" stop-color="#0284c7"/>
            <stop offset="100%" stop-color="#0369a1"/>
          </linearGradient>
          <linearGradient id="cindSkirt_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#bae6fd"/>
            <stop offset="40%" stop-color="#38bdf8"/>
            <stop offset="85%" stop-color="#0284c7"/>
            <stop offset="100%" stop-color="#075985"/>
          </linearGradient>
          <linearGradient id="auroraBodice_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fda4af"/>
            <stop offset="60%" stop-color="#e11d48"/>
            <stop offset="100%" stop-color="#9f1239"/>
          </linearGradient>
          <linearGradient id="auroraSkirt_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffe4e6"/>
            <stop offset="40%" stop-color="#fb7185"/>
            <stop offset="80%" stop-color="#e11d48"/>
            <stop offset="100%" stop-color="#881337"/>
          </linearGradient>
          <linearGradient id="iceBodice_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="60%" stop-color="#38bdf8"/>
            <stop offset="100%" stop-color="#0284c7"/>
          </linearGradient>
          <linearGradient id="iceSkirt_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f0f9ff"/>
            <stop offset="45%" stop-color="#7dd3fc"/>
            <stop offset="85%" stop-color="#0284c7"/>
            <stop offset="100%" stop-color="#0369a1"/>
          </linearGradient>
          <linearGradient id="iceCapeGrad_${uid}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
            <stop offset="50%" stop-color="#bae6fd" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.2"/>
          </linearGradient>
          <linearGradient id="iceCrownGrad_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="50%" stop-color="#7dd3fc"/>
            <stop offset="100%" stop-color="#0284c7"/>
          </linearGradient>
          <linearGradient id="celestialBodice_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f43f5e"/>
            <stop offset="50%" stop-color="#8b5cf6"/>
            <stop offset="100%" stop-color="#3b82f6"/>
          </linearGradient>
          <linearGradient id="celestialSkirt_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fbcfe8"/>
            <stop offset="30%" stop-color="#c084fc"/>
            <stop offset="65%" stop-color="#60a5fa"/>
            <stop offset="100%" stop-color="#1e1b4b"/>
          </linearGradient>
        </defs>

        <!-- Pedestal / Rune Ring -->
        <ellipse cx="100" cy="172" rx="58" ry="15" fill="url(#runeGrad_${uid})" stroke="#38bdf8" stroke-width="1.5"/>
        <ellipse cx="100" cy="172" rx="44" ry="10" fill="none" stroke="#67e8f9" stroke-dasharray="4 3" stroke-width="1.5"/>

        <!-- AURA (Behind) -->
        ${auraSVG}

        <!-- CAPE (Behind) -->
        ${capeSVG}

        <!-- FEMALE LONG HAIR (Behind Shoulders) -->
        ${femaleBackHairSVG}

        <!-- PET COMPANION (Left side) -->
        ${petSVG}

        <!-- HERO CHARACTER BODY -->
        ${!isBallgown ? `
          <!-- Normal Legs & Shoes for Boy / Adventurer / Armor -->
          <rect x="85" y="152" width="12" height="18" rx="4" fill="#0284c7" />
          <rect x="103" y="152" width="12" height="18" rx="4" fill="#0284c7" />
          <ellipse cx="91" cy="170" rx="8" ry="4.5" fill="#0f172a" />
          <ellipse cx="109" cy="170" rx="8" ry="4.5" fill="#0f172a" />
        ` : `
          <!-- Sparkling Glass Slippers peek under ballgown -->
          <ellipse cx="89" cy="175" rx="5.5" ry="3" fill="#bae6fd" stroke="#38bdf8" stroke-width="1"/>
          <ellipse cx="111" cy="175" rx="5.5" ry="3" fill="#bae6fd" stroke="#38bdf8" stroke-width="1"/>
        `}

        <!-- Torso & Suit / Ballgown -->
        ${torsoSVG}

        <!-- Arms & Hands -->
        ${isFemale ? `
          <!-- Graceful Princess Arms with Sweet Hands -->
          <path d="M 80 112 Q 66 126 76 138" stroke="${skinColor}" stroke-width="7" stroke-linecap="round" fill="none"/>
          <circle cx="76" cy="138" r="4" fill="${skinColor}" />
          <!-- Right arm holding Scepter/Wand -->
          <path d="M 120 112 Q 132 124 134 130" stroke="${skinColor}" stroke-width="7" stroke-linecap="round" fill="none"/>
          <circle cx="134" cy="130" r="4" fill="${skinColor}" />
        ` : `
          <!-- Left arm on hip -->
          <path d="M 80 112 Q 68 125 78 138" stroke="${skinColor}" stroke-width="8" stroke-linecap="round" fill="none"/>
          <circle cx="78" cy="138" r="4.5" fill="${skinColor}" />
          <!-- Right arm forward holding weapon -->
          <path d="M 120 112 Q 132 122 135 130" stroke="${skinColor}" stroke-width="8" stroke-linecap="round" fill="none"/>
          <circle cx="135" cy="130" r="4.5" fill="${skinColor}" />
        `}

        <!-- WEAPON / SCEPTER (Held in Right Hand) -->
        ${weaponSVG}

        <!-- CHIBI HEAD & FACE -->
        <!-- Neck -->
        <rect x="94" y="98" width="12" height="10" rx="2" fill="${skinShadow}" />
        <!-- Head base -->
        <circle cx="100" cy="74" r="28" fill="${skinColor}" stroke="${skinShadow}" stroke-width="1.5"/>
        
        <!-- Cute Blushing Cheeks -->
        <ellipse cx="84" cy="82" rx="${isFemale ? '6' : '5'}" ry="3.5" fill="#f43f5e" opacity="${isFemale ? '0.6' : '0.45'}" />
        <ellipse cx="116" cy="82" rx="${isFemale ? '6' : '5'}" ry="3.5" fill="#f43f5e" opacity="${isFemale ? '0.6' : '0.45'}" />

        <!-- Anime Big Eyes -->
        ${isFemale ? `
          <!-- Princess Sparkling Anime Eyes with Eyelashes -->
          <g>
            <!-- Eyelashes -->
            <path d="M 81 69 Q 88 64 94 69" stroke="#451a03" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M 81 68 L 78 65" stroke="#451a03" stroke-width="2" stroke-linecap="round"/>
            <path d="M 106 69 Q 112 64 119 69" stroke="#451a03" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M 119 68 L 122 65" stroke="#451a03" stroke-width="2" stroke-linecap="round"/>
            <!-- Left Eye -->
            <ellipse cx="88" cy="74" rx="5" ry="7" fill="${eyeColor}" />
            <circle cx="87" cy="71" r="2.4" fill="#ffffff" />
            <circle cx="90" cy="76" r="1.3" fill="#ffffff" />
            <circle cx="86" cy="77" r="0.8" fill="#fbcfe8" />
            <!-- Right Eye -->
            <ellipse cx="112" cy="74" rx="5" ry="7" fill="${eyeColor}" />
            <circle cx="111" cy="71" r="2.4" fill="#ffffff" />
            <circle cx="114" cy="76" r="1.3" fill="#ffffff" />
            <circle cx="110" cy="77" r="0.8" fill="#fbcfe8" />
            <!-- Sweet Princess Smile -->
            <path d="M 96 83 Q 100 87 104 83" fill="#f43f5e" stroke="#be123c" stroke-width="1.8" stroke-linecap="round" />
          </g>
        ` : `
          <!-- Boy Eyes -->
          <ellipse cx="88" cy="74" rx="4.5" ry="6.5" fill="${eyeColor}" />
          <circle cx="87" cy="71" r="2" fill="#ffffff" />
          <circle cx="89" cy="76" r="1" fill="#ffffff" />
          <ellipse cx="112" cy="74" rx="4.5" ry="6.5" fill="${eyeColor}" />
          <circle cx="111" cy="71" r="2" fill="#ffffff" />
          <circle cx="113" cy="76" r="1" fill="#ffffff" />
          <!-- Cute Happy Smile -->
          <path d="M 95 83 Q 100 88 105 83" fill="none" stroke="#78350f" stroke-width="2.2" stroke-linecap="round" />
        `}

        <!-- ANIME FRONT HAIR / BANGS -->
        ${isFemale ? `
          <!-- Princess Elegant Curving Bangs -->
          <g>
            <path d="M 72 65 Q 100 44 128 65 C 122 56 112 50 100 50 C 88 50 78 56 72 65 Z" fill="${hairColor}" />
            <!-- Soft Side Bangs Framing Face -->
            <path d="M 73 63 Q 78 78 80 88 Q 74 76 72 65 Z" fill="${hairColor}" />
            <path d="M 127 63 Q 122 78 120 88 Q 126 76 128 65 Z" fill="${hairColor}" />
            <!-- Center Curving Bang Strands -->
            <path d="M 86 52 Q 95 68 100 56 Q 105 68 114 52" stroke="${hairHighlight}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          </g>
        ` : `
          <!-- Boy Hair -->
          <path d="M 72 68 Q 70 42 100 42 Q 130 42 128 68 C 122 60 114 55 100 55 C 86 55 78 60 72 68 Z" fill="${hairColor}" />
          <!-- Spiky front bangs -->
          <polygon points="80,56 86,66 92,54" fill="${hairHighlight}" />
          <polygon points="90,54 98,70 104,54" fill="${hairHighlight}" />
          <polygon points="102,54 110,67 116,56" fill="${hairHighlight}" />
        `}

        <!-- HAT / TIARA / CROWN OVERLAY -->
        ${hatSVG}
      </svg>
    `;
  }function renderBossSVG(bossName, size = 110) {
    const uid = Math.random().toString(36).substring(2, 7);

    // Detect boss type by name keywords
    const name = bossName || '';
    if (name.includes('สิงโต') || name.includes('Lion')) {
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="maneGrad_${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#b45309"/><stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
          </defs>
          <!-- Giant Golden Mane -->
          <circle cx="100" cy="100" r="75" fill="url(#maneGrad_${uid})" stroke="#78350f" stroke-width="4"/>
          <!-- Spikes on mane -->
          <polygon points="100,18 106,30 94,30" fill="#78350f"/>
          <polygon points="160,45 152,58 144,50" fill="#78350f"/>
          <polygon points="40,45 48,58 56,50" fill="#78350f"/>
          <!-- Lion Face -->
          <circle cx="100" cy="104" r="48" fill="#f59e0b"/>
          <ellipse cx="80" cy="120" rx="14" ry="11" fill="#fef08a"/>
          <ellipse cx="120" cy="120" rx="14" ry="11" fill="#fef08a"/>
          <!-- Nose & Whiskers -->
          <polygon points="94,110 106,110 100,118" fill="#451a03"/>
          <path d="M 92 118 Q 100 125 108 118" stroke="#451a03" stroke-width="2.5" fill="none"/>
          <!-- Glowing Battle Eyes -->
          <ellipse cx="84" cy="95" rx="7" ry="8" fill="#dc2626"/>
          <circle cx="84" cy="94" r="3" fill="#fde047"/>
          <ellipse cx="116" cy="95" rx="7" ry="8" fill="#dc2626"/>
          <circle cx="116" cy="94" r="3" fill="#fde047"/>
          <!-- Crown on Lion -->
          <polygon points="80,55 86,35 94,45 100,28 106,45 114,35 120,55" fill="#facc15" stroke="#b45309" stroke-width="2"/>
        </svg>
      `;
    } else if (name.includes('ช้าง') || name.includes('Elephant')) {
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <!-- Elephant Big Ears -->
          <ellipse cx="50" cy="95" rx="35" ry="45" fill="#64748b" stroke="#334155" stroke-width="3"/>
          <ellipse cx="150" cy="95" rx="35" ry="45" fill="#64748b" stroke="#334155" stroke-width="3"/>
          <!-- Head -->
          <circle cx="100" cy="98" r="50" fill="#94a3b8" stroke="#475569" stroke-width="3"/>
          <!-- Tusks -->
          <path d="M 75 125 Q 60 145 50 135 Q 68 120 75 118 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
          <path d="M 125 125 Q 140 145 150 135 Q 132 120 125 118 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
          <!-- Trunk -->
          <path d="M 94 105 Q 100 150 115 152 Q 120 142 106 125 Z" fill="#64748b" stroke="#334155" stroke-width="2"/>
          <!-- Fierce Eyes -->
          <ellipse cx="84" cy="90" rx="6" ry="7" fill="#ea580c"/>
          <circle cx="84" cy="89" r="2.5" fill="#ffffff"/>
          <ellipse cx="116" cy="90" rx="6" ry="7" fill="#ea580c"/>
          <circle cx="116" cy="89" r="2.5" fill="#ffffff"/>
        </svg>
      `;
    } else if (name.includes('หุ่นยนต์') || name.includes('ไซบอร์ก') || name.includes('Robot') || name.includes('Cyborg')) {
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <!-- Robot Head Frame -->
          <rect x="55" y="55" width="90" height="85" rx="18" fill="#1e293b" stroke="#38bdf8" stroke-width="4"/>
          <!-- Antenna -->
          <line x1="100" y1="55" x2="100" y2="28" stroke="#38bdf8" stroke-width="4"/>
          <circle cx="100" cy="24" r="8" fill="#ef4444" stroke="#fca5a5" stroke-width="2"/>
          <!-- Glowing Neon Visor -->
          <rect x="68" y="78" width="64" height="24" rx="6" fill="#0f172a" stroke="#06b6d4" stroke-width="2"/>
          <line x1="72" y1="90" x2="128" y2="90" stroke="#22d3ee" stroke-width="5" stroke-linecap="round"/>
          <!-- Speaker Mouth -->
          <rect x="80" y="115" width="40" height="12" rx="4" fill="#334155"/>
          <line x1="88" y1="117" x2="88" y2="125" stroke="#38bdf8" stroke-width="2"/>
          <line x1="96" y1="117" x2="96" y2="125" stroke="#38bdf8" stroke-width="2"/>
          <line x1="104" y1="117" x2="104" y2="125" stroke="#38bdf8" stroke-width="2"/>
          <line x1="112" y1="117" x2="112" y2="125" stroke="#38bdf8" stroke-width="2"/>
          <!-- Bolts -->
          <circle cx="68" cy="68" r="3" fill="#94a3b8"/>
          <circle cx="132" cy="68" r="3" fill="#94a3b8"/>
        </svg>
      `;
    } else if (name.includes('ดิน') || name.includes('โกเลม') || name.includes('Golem')) {
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <!-- Stone Golem Boulders -->
          <circle cx="100" cy="100" r="65" fill="#78716c" stroke="#44403c" stroke-width="4"/>
          <polygon points="65,55 90,40 105,60 80,72" fill="#57534e"/>
          <polygon points="120,50 145,62 135,80 110,68" fill="#57534e"/>
          <!-- Glowing Green Runic Eyes -->
          <polygon points="76,92 92,90 84,102" fill="#22c55e"/>
          <polygon points="124,92 108,90 116,102" fill="#22c55e"/>
          <!-- Cracks with Green Energy -->
          <path d="M 100 102 L 95 118 L 105 130 L 98 145" stroke="#4ade80" stroke-width="3" fill="none"/>
          <!-- Moss patches -->
          <circle cx="70" cy="115" r="8" fill="#15803d"/>
          <circle cx="135" cy="120" r="10" fill="#15803d"/>
        </svg>
      `;
    } else if (name.includes('มังกร') || name.includes('Dragon')) {
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <!-- Dragon Horns -->
          <path d="M 75 75 Q 40 40 30 15 Q 65 35 80 60 Z" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
          <path d="M 125 75 Q 160 40 170 15 Q 135 35 120 60 Z" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
          <!-- Dragon Head -->
          <polygon points="100,45 145,85 130,140 100,165 70,140 55,85" fill="#dc2626" stroke="#991b1b" stroke-width="4"/>
          <!-- Snout & Fangs -->
          <polygon points="85,130 90,145 95,130" fill="#ffffff"/>
          <polygon points="105,130 110,145 115,130" fill="#ffffff"/>
          <!-- Eyes -->
          <polygon points="75,85 92,90 80,102" fill="#fde047"/>
          <polygon points="125,85 108,90 120,102" fill="#fde047"/>
          <!-- Smoke / Flame Puff -->
          <circle cx="95" cy="155" r="4" fill="#f97316" opacity="0.8"/>
          <circle cx="105" cy="155" r="4" fill="#f97316" opacity="0.8"/>
        </svg>
      `;
    } else {
      // Default Epic Boss: Runic Space Monster
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="62" fill="#6b21a8" stroke="#a855f7" stroke-width="4"/>
          <!-- Horns -->
          <polygon points="65,65 50,25 80,50" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
          <polygon points="135,65 150,25 120,50" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
          <!-- 3 Glowing Eyes -->
          <circle cx="75" cy="90" r="8" fill="#ef4444"/>
          <circle cx="100" cy="78" r="9" fill="#fde047"/>
          <circle cx="125" cy="90" r="8" fill="#ef4444"/>
          <circle cx="75" cy="89" r="3" fill="#ffffff"/>
          <circle cx="100" cy="77" r="3" fill="#000000"/>
          <circle cx="125" cy="89" r="3" fill="#ffffff"/>
          <!-- Fanged Mouth -->
          <path d="M 75 120 Q 100 145 125 120 Z" fill="#3b0764"/>
          <polygon points="85,120 90,132 95,120" fill="#ffffff"/>
          <polygon points="105,120 110,132 115,120" fill="#ffffff"/>
        </svg>
      `;
    }
  }

  // --- 8. CORE ENGINE API ---
  const DiamondEngine = {
    ITEMS,
    DEFAULT_COUPONS,

    getSave: loadSave,
    save: writeSave,

    renderHeroSVG: renderHeroSVG,
    renderBossSVG: renderBossSVG,
    renderAvatarHTML: renderHeroSVG, // backward compatibility

    resetAllData: function() {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('diamond_hero_save_v2');
      localStorage.removeItem('diamond_hero_save_v1');
      localStorage.removeItem('diamond_exam_history');
      localStorage.removeItem('diamond_cleared_quests');
      localStorage.removeItem('diamond_total_stars');
      writeSave(getDefaultSave());
      DiamondEngine.showToast('🧹 ล้างข้อมูลการทดสอบทั้งหมดเรียบร้อยแล้ว! เริ่มต้นการผจญภัยใหม่');
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
      data.redeemedCoupons.unshift({
        code: code,
        couponId: coupon.id,
        title: coupon.title,
        icon: coupon.icon,
        time: new Date().toLocaleString('th-TH'),
        verified: false
      });
      writeSave(data);
      playSound('victory');
      launchConfetti();
      return {
        success: true,
        code: code,
        msg: `🎉 แลกคูปอง "${coupon.title}" สำเร็จ! รหัสคูปอง: ${code} นำไปยื่นให้คุณพ่อคุณแม่ได้เลย!`
      };
    },

    verifyCoupon: function(code) {
      const data = loadSave();
      const cp = data.redeemedCoupons.find(x => x.code === code);
      if (cp) {
        cp.verified = true;
        writeSave(data);
        playSound('coin');
        return true;
      }
      return false;
    },

    addCustomCoupon: function(title, icon, costCoins, costGems, desc) {
      const data = loadSave();
      const id = 'custom_' + Date.now();
      data.customCoupons.push({
        id,
        title,
        icon: icon || '🎁',
        costCoins: parseInt(costCoins, 10) || 100,
        costGems: parseInt(costGems, 10) || 0,
        desc: desc || 'คูปองรางวัลพิเศษสำหรับน้องไดมอนด์'
      });
      writeSave(data);
      return true;
    },

    getAllCoupons: function() {
      const data = loadSave();
      return [...DEFAULT_COUPONS, ...(data.customCoupons || [])];
    },

    playSound: playSound,
    launchConfetti: launchConfetti,

    showToast: function(msg) {
      const existing = document.getElementById('diamond-toast');
      if (existing) existing.remove();

      const toast = document.createElement('div');
      toast.id = 'diamond-toast';
      toast.textContent = msg;
      toast.style.position = 'fixed';
      toast.style.bottom = '28px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      toast.style.background = 'linear-gradient(135deg, #1e1b4b, #312e81)';
      toast.style.color = '#ffd166';
      toast.style.padding = '14px 26px';
      toast.style.borderRadius = '99px';
      toast.style.fontWeight = '900';
      toast.style.fontSize = '1.02rem';
      toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.35), 0 0 15px rgba(245,158,11,0.5)';
      toast.style.zIndex = '999999';
      toast.style.border = '2px solid #f59e0b';
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => toast.remove(), 400);
      }, 3400);
    }
  };

  // --- 9. MODAL STYLES INJECTION ---
  const CSS = `
    .dmg-modal-overlay {
      position: fixed; inset: 0;
      background: rgba(15, 23, 42, 0.82);
      backdrop-filter: blur(8px);
      z-index: 999999;
      display: flex; align-items: center; justify-content: center;
      padding: 16px;
      animation: dmgFadeIn 0.25s ease;
    }
    @keyframes dmgFadeIn { from { opacity: 0; } to { opacity: 1; } }
    .dmg-modal-card {
      background: #0f172a;
      border: 2px solid rgba(255,255,255,0.18);
      border-radius: 28px;
      max-width: 900px; width: 100%;
      max-height: 90vh;
      display: flex; flex-direction: column;
      overflow: hidden;
      box-shadow: 0 25px 60px rgba(0,0,0,0.5), 0 0 35px rgba(99,102,241,0.3);
      color: #f8fafc;
    }
    .dmg-modal-header {
      background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%);
      padding: 18px 24px;
      display: flex; justify-content: space-between; align-items: center;
      border-bottom: 2px solid rgba(255,255,255,0.15);
    }
    .dmg-modal-body {
      padding: 20px;
      overflow-y: auto;
      flex: 1;
    }
    .dmg-shop-tabs {
      display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px;
    }
    .dmg-tab-btn {
      background: #1e293b; color: #94a3b8;
      border: 1.5px solid #334155;
      padding: 9px 16px; border-radius: 12px;
      font-weight: 800; font-size: 0.92rem;
      cursor: pointer; transition: all 0.15s;
    }
    .dmg-tab-btn:hover { background: #334155; color: white; }
    .dmg-tab-btn.active {
      background: linear-gradient(135deg, #3b82f6, #1d4ed8);
      color: white; border-color: #60a5fa;
      box-shadow: 0 4px 12px rgba(59,130,246,0.35);
    }
    .dmg-item-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 16px;
    }
    .dmg-item-card {
      background: #1e293b;
      border: 2px solid #334155;
      border-radius: 20px;
      padding: 16px;
      display: flex; flex-direction: column;
      justify-content: space-between;
      text-align: center;
      transition: all 0.18s;
      position: relative;
      overflow: hidden;
    }
    .dmg-item-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    }
    .dmg-item-card.rare { border-color: #38bdf8; box-shadow: 0 0 12px rgba(56,189,248,0.2); }
    .dmg-item-card.epic { border-color: #c084fc; box-shadow: 0 0 15px rgba(192,132,252,0.25); }
    .dmg-item-card.legendary {
      border-color: #f59e0b;
      background: linear-gradient(180deg, #1e293b 0%, #292524 100%);
      box-shadow: 0 0 20px rgba(245,158,11,0.3);
    }
    .rarity-pill {
      display: inline-block;
      font-size: 0.72rem; font-weight: 900;
      padding: 3px 10px; border-radius: 99px;
      text-transform: uppercase; margin-bottom: 8px;
    }
    .rarity-pill.common { background: #475569; color: #f1f5f9; }
    .rarity-pill.rare { background: #0284c7; color: #e0f2fe; }
    .rarity-pill.epic { background: #7e22ce; color: #f3e8ff; }
    .rarity-pill.legendary { background: #b45309; color: #fef08a; border: 1px solid #fde047; }
  `;
  const styleEl = document.createElement('style');
  styleEl.innerHTML = CSS;
  document.head.appendChild(styleEl);

  // --- 10. GLOBAL SHOP MODAL UI ---
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
          <div style="display:flex;align-items:center;gap:14px;">
            <div id="shopAvatarPreview">${renderHeroSVG(save.equipped, 56)}</div>
            <div>
              <h2 style="font-size:1.4rem;font-weight:900;">👑 ร้านแต่งตัวฮีโร่ & คลังรางวัล (Hero Vault)</h2>
              <p style="font-size:0.88rem;color:#cbd5e1;">สะสมเหรียญจากการตอบถูก เพื่อปลดล็อกของแต่งตัวและรางวัลจริง!</p>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="background:rgba(0,0,0,0.35);padding:6px 14px;border-radius:12px;font-weight:900;display:flex;gap:12px;font-size:1.1rem;border:1px solid rgba(255,255,255,0.2);">
              <span>🪙 <span id="shopCoinsVal">${save.coins}</span></span>
              <span>💎 <span id="shopGemsVal">${save.gems}</span></span>
            </div>
            <button onclick="document.getElementById('diamond-shop-modal').remove()" style="background:none;border:none;color:white;font-size:1.8rem;cursor:pointer;line-height:1;">✕</button>
          </div>
        </div>

        <div class="dmg-modal-body">
          <div class="dmg-shop-tabs">
            <button class="dmg-tab-btn" onclick="switchShopTab('hat')">👑 หมวก & มงกุฎ</button>
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
    if (!container) return;
    container.innerHTML = '';

    if (tabName === 'coupons') {
      const allCoupons = DiamondEngine.getAllCoupons();
      allCoupons.forEach(cp => {
        const canBuy = save.coins >= cp.costCoins && save.gems >= cp.costGems;
        const card = document.createElement('div');
        card.className = 'dmg-item-card';
        card.style.borderColor = '#f59e0b';
        card.style.background = 'linear-gradient(180deg, #1e293b 0%, #292524 100%)';
        card.innerHTML = `
          <div>
            <div style="font-size:3rem;margin:8px 0;">${cp.icon}</div>
            <div style="font-weight:900;font-size:1.1rem;color:#fde047;">${cp.title}</div>
            <div style="font-size:0.86rem;color:#cbd5e1;margin-top:6px;line-height:1.4;">${cp.desc}</div>
          </div>
          <div style="margin-top:16px;">
            <div style="font-weight:900;font-size:1.05rem;color:#facc15;margin-bottom:10px;">
              ใช้: 🪙 ${cp.costCoins} ${cp.costGems > 0 ? `+ 💎 ${cp.costGems}` : ''}
            </div>
            <button style="width:100%;padding:12px;border-radius:12px;border:none;font-weight:800;font-size:0.95rem;background:${canBuy ? 'linear-gradient(135deg, #f59e0b, #d97706)' : '#475569'};color:white;cursor:${canBuy ? 'pointer' : 'not-allowed'};" ${canBuy ? `onclick="handleRedeemCoupon('${cp.id}')"` : 'disabled'}>
              ${canBuy ? '🎟️ แลกรับคูปองนี้!' : 'แต้มยังไม่พอ'}
            </button>
          </div>
        `;
        container.appendChild(card);
      });
      return;
    }

    if (tabName === 'parent') {
      container.style.gridTemplateColumns = '1fr';
      const redeemed = save.redeemedCoupons || [];
      let rows = redeemed.map(rc => `
        <div style="background:#334155;border-radius:14px;padding:14px 18px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
          <div>
            <div style="font-size:1.15rem;font-weight:900;color:#ffd166;">${rc.icon} ${rc.title}</div>
            <div style="font-size:0.85rem;color:#cbd5e1;margin-top:2px;">รหัสคูปอง: <strong>${rc.code}</strong> • แลกเมื่อ: ${rc.time}</div>
          </div>
          <div>
            ${rc.verified ?
              `<span style="background:#22c55e;color:white;padding:6px 14px;border-radius:99px;font-weight:800;font-size:0.85rem;">✅ มอบรางวัลแล้ว</span>` :
              `<button onclick="handleVerifyCoupon('${rc.code}')" style="background:#f59e0b;color:#1e1b4b;border:none;padding:8px 16px;border-radius:10px;font-weight:900;cursor:pointer;">✅ กดยืนยันมอบรางวัล</button>`
            }
          </div>
        </div>
      `).join('');

      container.innerHTML = `
        <div style="background:#1e293b;border-radius:20px;padding:22px;border:1px solid #475569;">
          <h3 style="font-size:1.25rem;color:#fde047;margin-bottom:10px;">👨‍👩‍👦 ระบบตรวจสอบคูปองสำหรับคุณพ่อคุณแม่</h3>
          <p style="font-size:0.9rem;color:#cbd5e1;margin-bottom:16px;">
            เมื่อน้องไดมอนด์ทำข้อสอบจนได้แต้มมาแลกคูปอง รหัสคูปองจะขึ้นตรงนี้ คุณพ่อคุณแม่สามารถกดปุ่ม "ยืนยันมอบรางวัล" ได้เลยครับ!
          </p>
          <div style="max-height:280px;overflow-y:auto;margin-bottom:20px;">
            ${redeemed.length === 0 ? '<p style="color:#94a3b8;font-size:0.95rem;">ยังไม่มีคูปองที่รอมอบรางวัล</p>' : rows}
          </div>

          <hr style="border-color:#334155;margin:20px 0;">

          <!-- DANGER ZONE: RESET TEST DATA -->
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;background:#3f1717;border:1.5px solid #dc2626;border-radius:14px;padding:14px 18px;">
            <div>
              <div style="font-weight:900;color:#fca5a5;">🗑️ ล้างข้อมูลการทดสอบทั้งหมด (Clean Reset)</div>
              <div style="font-size:0.84rem;color:#fecaca;">ล้างประวัติการทดสอบ เหรียญ ของแต่งตัว และเริ่มใหม่ด้วยเหรียญเริ่มต้น 100 🪙 + 3 💎</div>
            </div>
            <button onclick="handleResetAllData()" style="background:#dc2626;color:white;border:none;padding:10px 18px;border-radius:10px;font-weight:900;cursor:pointer;">
              ล้างข้อมูลทันที ➔
            </button>
          </div>
        </div>
      `;
      return;
    }

    // Normal Gear Items: hat, suit, weapon, pet, aura, hero
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(240px, 1fr))';
    const itemsInSlot = Object.values(ITEMS).filter(it => it.slot === tabName);

    itemsInSlot.forEach(it => {
      const owned = save.inventory.includes(it.id);
      const isEquipped = save.equipped[it.slot] === it.id;
      const canAfford = save.coins >= it.price && save.gems >= it.gems;

      // Mock equipment preview with this item equipped
      const previewEquipped = Object.assign({}, save.equipped);
      previewEquipped[it.slot] = it.id;

      const card = document.createElement('div');
      card.className = `dmg-item-card ${it.rarity}`;

      card.innerHTML = `
        <div>
          <span class="rarity-pill ${it.rarity}">${it.rarity}</span>
          <div style="display:flex;justify-content:center;margin:8px 0;">
            ${renderHeroSVG(previewEquipped, 88)}
          </div>
          <div style="font-weight:900;font-size:1.05rem;color:#f8fafc;">${it.name}</div>
          <div style="font-size:0.84rem;color:#94a3b8;margin-top:4px;min-height:36px;">${it.desc}</div>
        </div>

        <div style="margin-top:14px;">
          ${!owned ? `
            <div style="font-weight:900;font-size:1rem;color:#facc15;margin-bottom:8px;">
              🪙 ${it.price} ${it.gems > 0 ? `+ 💎 ${it.gems}` : ''}
            </div>
            <button onclick="handleBuyItem('${it.id}')" style="width:100%;padding:10px;border-radius:12px;border:none;font-weight:900;font-size:0.92rem;background:${canAfford ? 'linear-gradient(135deg, #f59e0b, #d97706)' : '#475569'};color:white;cursor:${canAfford ? 'pointer' : 'not-allowed'};" ${canAfford ? '' : 'disabled'}>
              ${canAfford ? '🛒 กดซื้อไอเทมนี้' : 'เหรียญไม่พอ'}
            </button>
          ` : `
            <button onclick="handleEquipItem('${it.slot}', '${it.id}')" style="width:100%;padding:10px;border-radius:12px;border:none;font-weight:900;font-size:0.92rem;background:${isEquipped ? '#15803d' : '#2563eb'};color:white;cursor:pointer;">
              ${isEquipped ? '✅ กำลังสวมใส่อยู่' : '👕 กดสวมใส่'}
            </button>
          `}
        </div>
      `;
      container.appendChild(card);
    });
  };

  // Click Handlers
  window.handleBuyItem = function(itemId) {
    const res = DiamondEngine.buyItem(itemId);
    DiamondEngine.showToast(res.msg);
    refreshShopUI();
  };

  window.handleEquipItem = function(slot, itemId) {
    const res = DiamondEngine.equipItem(slot, itemId);
    DiamondEngine.showToast(res.msg);
    refreshShopUI();
  };

  window.handleRedeemCoupon = function(cpId) {
    const allC = DiamondEngine.getAllCoupons();
    const cp = allC.find(x => x.id === cpId);
    if (!cp) return;
    const res = DiamondEngine.redeemCoupon(cp);
    if (res.success) {
      DiamondEngine.showToast(res.msg);
      alert(res.msg);
      refreshShopUI();
      window.switchShopTab('parent');
    } else {
      DiamondEngine.showToast(res.msg);
    }
  };

  window.handleVerifyCoupon = function(code) {
    if (confirm('ยืนยันว่าคุณพ่อคุณแม่ได้มอบรางวัลให้น้องไดมอนด์เรียบร้อยแล้วใช่หรือไม่?')) {
      DiamondEngine.verifyCoupon(code);
      refreshShopUI();
      DiamondEngine.showToast('✅ ยืนยันการมอบรางวัลเรียบร้อย!');
    }
  };

  window.handleResetAllData = function() {
    if (confirm('ต้องการล้างข้อมูลการทดสอบทั้งหมด และเริ่มใหม่ใช่หรือไม่?')) {
      DiamondEngine.resetAllData();
      refreshShopUI();
      const modal = document.getElementById('diamond-shop-modal');
      if (modal) modal.remove();
      location.reload();
    }
  };

  function refreshShopUI() {
    const save = loadSave();
    const sc = document.getElementById('shopCoinsVal');
    const sg = document.getElementById('shopGemsVal');
    if (sc) sc.textContent = save.coins;
    if (sg) sg.textContent = save.gems;
    const prev = document.getElementById('shopAvatarPreview');
    if (prev) prev.innerHTML = renderHeroSVG(save.equipped, 56);

    const activeTab = document.querySelector('.dmg-tab-btn.active');
    if (activeTab) {
      const oc = activeTab.getAttribute('onclick') || '';
      const match = oc.match(/'([^']+)'/);
      if (match && match[1]) window.switchShopTab(match[1]);
    }
  }

  window.DiamondEngine = DiamondEngine;

})(window);
