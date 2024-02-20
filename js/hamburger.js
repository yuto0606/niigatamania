
// openという変数を定義し、falseという値を代入する
var open = false;

// Dropという関数を定義する
// nという引数を受け取る
function Drop(n) {
  // iという変数を定義する
  var i;
  // openがfalseの場合
  if (open == false) {
    // nから4までの整数に対して繰り返す
    for (i = n; i < 7; i++) {
      // Drpという関数を呼び出す
      // iを引数として渡す
      Drp(i);
    }
    // openにtrueという値を代入する
    open = true;
  // openがtrueの場合
  } else if (open == true) {
    // nから4までの整数に対して繰り返す
    for (i = n; i < 7; i++) {
      // Clsという関数を呼び出す
      // iを引数として渡す
      Cls(i);
    }
    // openにfalseという値を代入する
    open = false;
  }
}

// Drpという関数を定義する
// nという引数を受け取る
function Drp(n) {
  // elemという変数を定義し、menu-conというクラス名を持つ要素のn番目を代入する
  var elem = document.getElementsByClassName("menu-con")[n];
  // posという変数を定義し、ウィンドウの高さに-1をかけた値とnに100をかけた値の和を代入する
  var pos = -1 * window.innerHeight - n * 100;
  // idという変数を定義し、setIntervalという関数を呼び出す
  // frameという関数と5という値を引数として渡す
  var id = setInterval(frame, 5);

  // frameという関数を定義する
  function frame() {
    // posが-10以上の場合
    if (pos >= -10) {
      // idに対してclearIntervalという関数を呼び出す
      // タイマーを停止する
      clearInterval(id);
      // elemのstyleのtopプロパティに0という値を代入する
      // 要素の位置を上端に合わせる
      elem.style.top = 0 + "px";
    // posが-10未満の場合
    } else {
      // posに10を足す
      pos += 10;
      // elemのstyleのtopプロパティにposという値を代入する
      // 要素の位置を下に移動させる
      elem.style.top = pos + "px";
    }
  }
}

// Clsという関数を定義する
// nという引数を受け取る
function Cls(n) {
  // elemsという変数を定義し、menu-conというクラス名を持つ要素のn番目を代入する
  var elems = document.getElementsByClassName("menu-con")[n];
  // possという変数を定義し、0という値を代入する
  var poss = 0;
  // idsという変数を定義し、setIntervalという関数を呼び出す
  // framesという関数と5という値を引数として渡す
  var ids = setInterval(frames, 5);

  // framesという関数を定義する
  function frames() {
    // possがウィンドウの高さに-1をかけた値以下の場合
    if (poss <= -1 * window.innerHeight) {
      // idsに対してclearIntervalという関数を呼び出す
      // タイマーを停止する
      clearInterval(ids);
      // elemsのstyleのtopプロパティにウィンドウの高さに-1をかけた値を代入する
      // 要素の位置を下端に合わせる
      elems.style.top = -1 * window.innerHeight + "px";
    // possがウィンドウの高さに-1をかけた値より大きい場合
    } else {
      // possに-7とnに2をかけた値の和を足す
      poss += -7 - n * 2;
      // elemsのstyleのtopプロパティにpossという値を代入する
      // 要素の位置を上に移動させる
      elems.style.top = poss + "px";
    }
  }
}


