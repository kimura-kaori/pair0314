$(document).ready(function () {
  // 「国語、英語、数学、理科、社会」の点数（入力値）を取得して合計点と平均点を出すロジック
  function score_indicate() {
    // 変数「subject_points」に「国語、英語、数学、理科、社会」の点数の配列を代入します。
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ]};

    // score_indicateを使う
    // 合計と平均の関数だす
    function totalpoint(){
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];

    };

    $("#sum_indicate").text(function totalpoint() {
      let sum = totalpoint
    });

    // $("#sum_indicate").text(sum);

    let average_indicate = totalpoint / subject_points.length;
    $("#average_indicate").text(average_indicate);
    };

    function get_achievement() {
      let averageIndicate = $("#average_indicate").text();


      if (averageIndicate >= 80) {
        return "A";
      }
      else if (averageIndicate >= 60) {
        return "B";
      }
      else if (averageIndicate >= 40) {
        return "C";

      }else{
        return "D";
      }
    };


  // 各教科の点数を取得し、取得した点数から「合格、不合格」の判断を下すロジックを作ります。
  function get_pass_or_failure() {
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];
    // 変数「number」に入力した教科の数を代入します。
    let number = subject_points.length;
    // 変数「judge」に"合格"を代入しておきます。
    let judge = "合格";
    for(let i=0; i<number; i++){
      if(subject_points[i] < 60){
        judge = "不合格"
      }
    }
    return judge;

  };


  // 最終的なジャッジのロジックを作ります。
  function judgement() {
    // debugger
    // 変数「achievement」に「get_achievement()の戻り値」を代入します。
    let achievement = get_achievement();
    // 変数「pass_or_failure」に「get_pass_or_failure()の戻り値」を代入します。
    let pass_or_failure = get_pass_or_failure();
    // 「最終ジャッジ」(id="alert-indicate)ボタンを押したら「あなたの成績は${achievement}です。${pass_or_failure}です。」が出力される処理です。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です。</label>`);
  }
    // console.log(judgement());
  // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]のいずれかの点数が変更された際に「function score_indicate()」を発火させる処理です。
  $('#national_language, #english, #mathematics, #science, #society').change(function () {
    score_indicate();
  });
  // 「ランク」(id="evaluation")ボタンを押したら「get_achievement()」が出力される処理です。
  $('#btn-evaluation').click(function () {
    $("#evaluation").text(get_achievement());
  });
  // 「判定」(id="btn-judge")ボタンを押したら「function et_pass_or_failure()」が出力される処理です。
  $('#btn-judge').click(function () {
    $("#judge").text(get_pass_or_failure());
  });

  $('#btn-declaration').click(function () {
    $('#alert-indicate').remove();
      // $(this).addClass('btn btn-warning');
     // $("#declaration").text(get_pass_or_failure());
    judgement();
  });
}});
