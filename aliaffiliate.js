var urlmain = document.URL;
var md = document.URL.split("/")[3];
var id = document.URL.split("/")[4];

if (md == 'deep') {
  var redir = 'http://s.click.aliexpress.com/deep_link.htm?aff_short_key=_A7qeZx&dl_target_url=https://www.aliexpress.com/item/'+id;
} else {
  var redir = 'https://s.click.aliexpress.com/e/_A7qeZx';
}

window.location = redir;
