import Chart from 'chart.js';
export default function () {
  // 参考: https://tt-computing.com/chartjs2-doughnut-label

  const options = {
    // タイトル設定
    // title: {
    //   display: true,
    //   fontSize: 16,
    //   text: 'Progress',
    // },
    cutoutPercentage: 60, // グラフの太さ（中央部分を何％切り取るか）
    legend: { display: false }, // 凡例を表示しない
    responsive: false, // 自動サイズ変更をしない
    tooltips: { enabled: false }, // マウスオーバー時に情報を表示しない
    hover: { mode: null }, // マウスオーバー時に色を変化させない
    elements: {
      arc: {
        borderWidth: 0, // 境界線を削除
      },
    },
  };
  const object = document.querySelectorAll('.js-chart-doughnut');
  const chartDoughnut = (object, dataList) => {
    const data = {
      datasets: [
        {
          data: dataList,
          backgroundColor: ['rgb(48 129 173)', 'rgb(196,229,233)', 'rgb(241 245 245)'],
        },
      ],
    };
    const ctx = object.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options,
    });
  };

  for (let i = 0; i < object.length; i++) {
    // 取得した文字列をカンマ区切りで配列に変換したものを、数値の配列に変換する
    const objectData = object[i].dataset.ratio.split(',').map(Number);
    chartDoughnut(object[i], objectData);
  }

  // 円グラフの中央に値を出力する
  // const title = '円グラフ<br>タイトル';
  // var chartJsPluginCenterLabel = {
  //   labelShown: false,
  //   beforeDraw: function (chart) {
  //     // afterRender を採用した場合は何度も実行されるので、２回目以降は処理しない
  //     if (this.labelShown) {
  //       return;
  //     }
  //     this.labelShown = true;
  //     // HTMLの追加（タイトルのみならHTML直書き処理でも構わない）
  //     // var value = chart.data.datasets[0].data[0];
  //     const labelBox = document.createElement('div');
  //     labelBox.classList.add('label-box');
  //     labelBox.innerHTML =
  //       '<div class="label">' +
  //       '<div class="title">' +
  //       title +
  //       '</div>' +
  //       // '<div class="value">' +
  //       // value +
  //       // '<span class="per">%</span>' +
  //       '</div>';
  //     +'</div>';
  //     // ラベル描画
  //     const canvas = chart.ctx.canvas;
  //     canvas.parentNode.insertBefore(labelBox, canvas.nextElementSibling);
  //   },
  // };
  // // 上記プラグインの有効化;
  // Chart.plugins.register(chartJsPluginCenterLabel);
}
