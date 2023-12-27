function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  const maxHealth = health;

  let lastAttackTime = 0;
  let curHealth = maxHealth;

  for (const [attackTime, damage] of attacks) {
    const timeDiff = attackTime - lastAttackTime - 1;
    const heal = timeDiff * x + Math.floor(timeDiff / t) * y;
    curHealth = Math.min(curHealth + heal, maxHealth);
    curHealth -= damage;

    if (curHealth <= 0) return -1;
    lastAttackTime = attackTime;
  }
  return curHealth;
}