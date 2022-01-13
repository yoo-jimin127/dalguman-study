let key_word = []; // 키워드가 담길 배열이라면,,

let candidate_key = "후보키워드"; // 가져온 키라면,,

if (key_word.includes(candidate_key)) {
  // 만약 후보키가 기존키배열에 포함이 안되어있다면,
  key_word.push(candidate_key);
  // 키모임에 추가함
} else {
  // 중복되있으니까 아무것도 안함.
}
