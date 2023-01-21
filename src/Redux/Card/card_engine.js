"use strict";

var CardTradeMode = {
  CardTradeMode_ONLY_INSERT_CARD: 1,
  CardTradeMode_ONLY_SWIPE_CARD: 2,
  CardTradeMode_SWIPE_INSERT_CARD: 5,
  CardTradeMode_UNALLOWED_LOW_TRADE: 4,
  CardTradeMode_SWIPE_TAP_INSERT_CARD: 3,
  CardTradeMode_SWIPE_TAP_INSERT_CARD_UNALLOWED_LOW_TRADE: 6,
  CardTradeMode_ONLY_TAP_CARD: 7,
  CardTradeMode_SWIPE_TAP_INSERT_CARD_NOTUP: 8,
  CardTradeMode_SWIPE_TAP_INSERT_CARD_NOTUP_UNALLOWED_LOW_TRADE: 9,
  CardTradeMode_TAP_INSERT_CARD: 11,
  CardTradeMode_TAP_INSERT_CARD_NOTUP: 10,
  CardTradeMode_SWIPE_TAP_INSERT_CARD_DOWN: 12,
};
var posInputAmountFlag;
export var CommunicationMode = {
    BLUETOOTH: 0,
    USB: 1,
    BLUETOOTH_BLE: 2,
    UART: 3,
  },
  EMVDataOperation = {
    CLEAR: 0,
    ADD: 1,
    DELETE: 2,
    ATTAINLIST: 3,
    UPDATE: 4,
    GETEMV: 5,
  };
export var TransactionType = {};
function anlycPosInfo() {
  var e,
    t = upPLength(),
    n = (void 0, 0),
    r = getUpPByte(n++),
    o = hex2Ascii(byteArray2Hex(getUpPBytes(n, r))),
    r = ((n += r), getUpPByte(n++)),
    a = hex2Ascii(byteArray2Hex(getUpPBytes(n, r))),
    r = ((n += r), getUpPByte(n++)),
    s = byteArray2Hex(getUpPBytes(n, r)),
    i = "",
    r =
      (3 < (s = hex2Ascii(s)).length &&
        ((i = s.substr(3, r)), (s = s.substr(0, 3))),
      (n += r),
      getUpPByte(n++)),
    u = (void 0, byteArrayToInt(getUpPBytes(n, r)) + " mV"),
    r = ((n += r), getUpPByte(n++)),
    l = "00" === (l = byteArray2Hex(getUpPBytes(n, r))) ? "false" : "true",
    r = ((n += r), getUpPByte(n++)),
    c = "00" === (c = byteArray2Hex(getUpPBytes(n, r))) ? "false" : "true",
    r = ((n += r), getUpPByte(n++)),
    y = "00" === (y = byteArray2Hex(getUpPBytes(n, r))) ? "false" : "true",
    r = ((n += r), getUpPByte(n++)),
    g = "00" === (g = byteArray2Hex(getUpPBytes(n, r))) ? "false" : "true",
    r = ((n += r), getUpPByte(n++)),
    m = "00" === (m = byteArray2Hex(getUpPBytes(n, r))) ? "false" : "true",
    d = "",
    r =
      ((n += r) < t &&
        ((r = getUpPByte(n++)),
        (d = byteArray2Hex(getUpPBytes(n, r))),
        (n += r)),
      void 0,
      ""),
    d =
      (n < t &&
        ((d = getUpPByte(n++)),
        (r =
          "00" === (r = byteArray2Hex(getUpPBytes(n, d))) ? "false" : "true"),
        (n += d)),
      ""),
    p =
      (n < t &&
        ((p = getUpPByte(n++)),
        (d =
          "00" === (d = byteArray2Hex(getUpPBytes(n, p))) ? "false" : "true"),
        (n += p)),
      "");
  return (
    n < t &&
      ((t = getUpPByte(n++)),
      100 < (e = getUpPBytes(n, t)[0]) ? (e = 100) : e < 0 && (e = 0),
      (p = e.toString(10)),
      (p += "%"),
      (n += t)),
    {
      isSupportedTrack1: y,
      isSupportedTrack2: g,
      isSupportedTrack3: m,
      bootloaderVersion: o,
      firmwareVersion: a,
      isUsbConnected: c,
      isCharging: l,
      batteryLevel: u,
      hardwareVersion: s,
      SUB: i,
      updateWorkKeyFlag: r,
      keyboardflag: d,
      batteryPercentage: p,
    }
  );
}
function anlycPosId() {
  var e,
    t = upPLength(),
    n = 0,
    r = getUpPByte(n++),
    o = byteArray2Hex(getUpPBytes(n, r)),
    r = ((n += r), getUpPByte(n++)),
    a = byteArray2Hex(getUpPBytes(n, r)),
    r = ((n += r), void 0, getUpPByte(n++)),
    r = (byteArray2Hex(getUpPBytes(n, r)), (n += r), getUpPByte(n++)),
    r =
      (byteArray2Hex(getUpPBytes(n, r)),
      (n += r) < t &&
        ((r = getUpPByte(n++)),
        byteArray2Hex(getUpPBytes(n, r)),
        (n += r),
        (r = getUpPByte(n++)),
        byteArray2Hex(getUpPBytes(n, r)),
        (n += r)),
      "");

  n < t &&
    ((e = getUpPByte(n++)), (r = byteArray2Hex(getUpPBytes(n, e))), (n += e)),
    n < t &&
      ((e = getUpPByte(n++)),
      byteArray2Hex(getUpPBytes(n, e)),
      (n += e),
      (e = getUpPByte(n++)),
      byteArray2Hex(getUpPBytes(n, e)),
      (n += e),
      (e = getUpPByte(n++)),
      byteArray2Hex(getUpPBytes(n, e)),
      (n += e),
      (e = getUpPByte(n++)),
      byteArray2Hex(getUpPBytes(n, e)),
      (n += e),
      (e = getUpPByte(n++)),
      byteArray2Hex(getUpPBytes(n, e)),
      (n += e));

  return (
    n < t &&
      ((e = getUpPByte(n++)), byteArray2Hex(getUpPBytes(n, e)), (n += e)),
    { posId: a, csn: r, psamId: o }
  );
}
(TransactionType.GOODS = 1),
  (TransactionType.SERVICES = 2),
  (TransactionType.CASH = 3),
  (TransactionType.CASHBACK = 4),
  (TransactionType.INQUIRY = 5),
  (TransactionType.TRANSFER = 6),
  (TransactionType.ADMIN = 7),
  (TransactionType.CASHDEPOSIT = 8),
  (TransactionType.PAYMENT = 9),
  (TransactionType.PBOCLOG = 10),
  (TransactionType.SALE = 11),
  (TransactionType.PREAUTH = 12),
  (TransactionType.ECQ_DESIGNATED_LOAD = 16),
  (TransactionType.ECQ_UNDESIGNATED_LOAD = 17),
  (TransactionType.ECQ_CASH_LOAD = 18),
  (TransactionType.ECQ_CASH_LOAD_VOID = 19),
  (TransactionType.ECQ_INQUIRE_LOG = 10),
  (TransactionType.REFUND = 20),
  (TransactionType.SALES_NEW = 21),
  (TransactionType.LEGACY_MONEY_ADD = 22),
  (TransactionType.NON_LEGACY_MONEY_ADD = 23),
  (TransactionType.BALANCE_UPDATE = 24),
  (TransactionType.UPDATE_PIN = 240);
var myConnectType,
  CmdId = {
    CMDID_WAITING: 35,
    CMDID_QUERY: 34,
    CMDID_PART_DATA: 54,
    CMDID_OLD: 0,
    CMDID_RESET: 32,
    CMDID_PROCESS: 33,
    CMDID_COMPLETED: 36,
    CMDID_TIMEOUT: 37,
    CMDID_DESTRUCT: 38,
    CMDID_CRCERROR: 39,
    CMDID_USERCANCEL: 40,
    CMDID_MACERROR: 41,
    CMDID_ICC_INIT_ERROR: 48,
    CMDID_ICC_POWER_ON_ERROR: 49,
    CMDID_ICC_TRADE_ERROR: 50,
    CMDID_EMV_TRANS_TERMINATE: 51,
    CMDID_EMV_TRANS_DENIAL: 52,
    CMDID_NOT_AVAILABLE: 53,
    CMDID_COMPLETED_ENCRY: 136,
    CMDID_EMV_APP_CFG_ERROR: 55,
    CMDID_EMV_CAPK_CFG_ERROR: 56,
    CMDID_WR_DATA_ERROR: 57,
    CMDID_NO_UPDATE_WORK_KEY: 64,
    CMDID_INPUT_PIN_ING: 65,
    CMDID_MAG_TO_ICC_TRADE: 66,
    CMDID_SEND_IC_CARDNO: 67,
    CMDID_EMV_TRANS_CARD_BLOCKED_OR_EMV_APPS: 68,
    CMDID_EMV_TRANS_SELECT_APP_FAILED: 69,
    CMDID_EMV_TRANS_CAPK_FAILED: 70,
    CMDID_EMV_TRANS_FALLBACK: 71,
    CMDID_EMV_TRANS_TERMINATE_NFC: 72,
    CMDID_CARD_REMOVED: 81,
    CMDID_MSR_DATA_READY: 82,
    CMDID_EMV_KERNEL_PC: 73,
    CMDID_CHECK_HAVE_CARD: 137,
  };
function CommandDownlink(e, t, n) {
  packCmmandDownlink(33, e, t, n, new Array());
}
function CommandDownlink2(e, t, n, r) {
  packCmmandDownlink(33, e, t, n, r);
}
function CommandDownlink3(e, t, n, r, o) {
  packCmmandDownlink(e, t, n, r, o);
}
function CommandDownlink4(e, t, n, r) {
  packCmmandDownlink(e, t, n, r, new Array());
}
function getDownPByte(e) {
  return getPByte(e);
}
function getDownPBytes() {
  return getPBytes();
}
function packCmmandDownlink(e, t, n, r, o) {
  packet(o.length),
    setCmdID(e),
    setCmdCode(t),
    setCmdSubCode(n),
    setTimeOut(r),
    setDataField(o),
    buildCRC();
}
function commandCode() {
  return getCmdCode();
}
function subCommandCode() {
  return getCmdSubCode();
}
function getResult() {
  return getResultCode();
}
function commandID() {
  return getCmdID();
}
function upPLength() {
  var e = new Array();
  return (e[0] = getPByte(3)), (e[1] = getPByte(4)), byteArrayToInt(e);
}
function getUpPByte(e) {
  return getDataFieldByte(e);
}
function getUpPBytes(e, t) {
  for (var n = new Array(), r = 0; r < t; r++) n[r] = getDataFieldByte(e + r);
  return n;
}
function getAllBytes() {
  return getPBytes();
}
function validCRC() {
  return validPCRC();
}
function packageCommandUplink(e) {
  var t = hexStr2Bytes(e.substring(10, e.length));
  packet(e.length / 2 - 5),
    setCmdID(CmdId.CMDID_COMPLETED),
    setCmdCode(parseInt(e.substring(0, 2), 16)),
    setCmdSubCode(parseInt(e.substring(2, 4), 16)),
    setTimeOut(0),
    setDataField(t),
    buildCRC();
}
function resetQPosStatus() {
  myConnectType === CommunicationMode.BLUETOOTH
    ? (void 0, startSessionBluetooth(packageInstructionReset(), null, 5))
    : myConnectType === CommunicationMode.USB
    ? (void 0, startSessionUSB(packageInstructionReset(), null, 5))
    : myConnectType === CommunicationMode.UART
    ? (void 0, startSessionSerial(packageInstructionReset(), null, 5))
    : void 0;
}
function startSession(e, t, n) {
  myConnectType === CommunicationMode.BLUETOOTH
    ? (void 0, startSessionBluetooth(e, t, n))
    : myConnectType === CommunicationMode.USB
    ? (void 0, startSessionUSB(e, t, n))
    : myConnectType === CommunicationMode.UART
    ? (void 0, startSessionSerial(e, t, n))
    : void 0;
}
function startSysSession(e, t, n) {
  return myConnectType === CommunicationMode.BLUETOOTH
    ? (void 0, startSysSessionBluetooth(e, t, n))
    : myConnectType === CommunicationMode.USB
    ? (void 0, startSysSessionUSB(e, t, n))
    : void (myConnectType === CommunicationMode.UART
        ? (void 0, startSysSessionSerial(e, t, n))
        : void 0);
}
var pinStr,
  pinMode,
  mTradeAmount,
  mCurrencyCode,
  mCashbackAmount,
  mTradeType,
  DoTrade = function (e) {
    writeObj(e), (mListener = e), void 0, writeObj(this);
  },
  EmvOption = {
    START: 0,
    START_WITH_FORCE_ONLINE: 1,
    START_WITH_FORCE_PIN: 2,
    START_WITH_FORCE_ONLINE_FORCE_PIN: 3,
  },
  DoTradeMode = {
    COMMON: 0,
    CHECK_CARD_NO_IPNUT_PIN: 1,
    IS_DEBIT_OR_CREDIT: 2,
  },
  TransactionResult = {
    APPROVED: "APPROVED",
    TERMINATED: "TERMINATED",
    DECLINED: "DECLINED",
    CANCEL: "CANCEL",
    CAPK_FAIL: "CAPK_FAIL",
    NOT_ICC: "NOT_ICC",
    SELECT_APP_FAIL: "SELECT_APP_FAIL",
    DEVICE_ERROR: "DEVICE_ERROR",
    CARD_NOT_SUPPORTED: "CARD_NOT_SUPPORTED",
    MISSING_MANDATORY_DATA: "MISSING_MANDATORY_DATA",
    CARD_BLOCKED_OR_NO_EMV_APPS: "CARD_BLOCKED_OR_NO_EMV_APPS",
    INVALID_ICC_DATA: "INVALID_ICC_DATA",
    FALLBACK: "FALLBACK",
    NFC_TERMINATED: "NFC_TERMINATED",
    CARD_REMOVED: "CARD_REMOVED",
    TRADE_LOG_FULL: "TRADE_LOG_FULL",
    TRANSACTION_NOT_ALLOWED_AMOUNT_EXCEED:
      "TRANSACTION_NOT_ALLOWED_AMOUNT_EXCEED",
  },
  mDoTradeMode = DoTradeMode.COMMON,
  mCardTmode = CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD,
  mAmountIcon = "",
  cDisplayStr = "",
  mFormatId = "",
  mBatchId = "",
  mAmountPoint = "",
  mSaveLogFlag = "",
  mIsSupportCashBack = !1,
  FINA_CONFIRM = "03",
  BATCH_DC = "04",
  OFFLINE_ADVICE = "05",
  ONLINE_ADVICE = "06",
  REVERSAL = "07",
  EMV_TRANS_ACCEPT = "01",
  EMV_TRANS_DENIAL = "02",
  EMV_TRANS_GOONLINE = "03";
function setAmountPoint(e) {
  mAmountPoint = e ? "01" : "00";
}
function sendPin(e) {
  (pinMode = "00"),
    (pinMode = "" === (pinStr = e) || null === pinStr ? "00" : "01"),
    void 0,
    EMVCvmSetPin(e);
}
function isSavelog(e) {
  mSaveLogFlag = e ? "01" : "00";
}
export function setAmount(e, t, n, r) {
  void 0,
    (mTradeAmount = e),
    (mCashbackAmount = t),
    (mCurrencyCode = n),
    void 0,
    (mTradeType = toHex(r).substr(2, 2)),
    void 0;
}
var datas,
  encMode,
  AmountType = {
    MONEY_TYPE_NONE: 1,
    MONEY_TYPE_RMB: 2,
    MONEY_TYPE_DOLLAR: 3,
    MONEY_TYPE_CUSTOM_STR: 4,
  };
function setAmountIcon(e, t) {
  void 0;
  var n = "";
  if (e === AmountType.MONEY_TYPE_NONE) n = "01";
  else if (e === AmountType.MONEY_TYPE_RMB) n = "02";
  else if (e === AmountType.MONEY_TYPE_DOLLAR) n = "03";
  else if (e === AmountType.MONEY_TYPE_CUSTOM_STR)
    return void (
      null !== (mAmountIcon = t) &&
      "" !== t &&
      (mAmountIcon = byteArray2Hex(getUTF8Bytes(t.trim())))
    );
  this.amountIcon = n;
}
function setDoTradeMode(e) {
  mDoTradeMode = e;
}
function setFormatId(e) {
  mFormatId = e;
}
function setBatchId(e) {
  mBatchId = e;
}
function setCardTmodeMode(e) {
  mCardTmode = e;
}
function checkAmount(e, t) {
  var n = !0;
  if (null !== e && "" !== e && 0 !== e.length) {
    if ("FFFFFFFF" === e) return (posInputAmountFlag = !0), void 0, n;
    if ("00000000" === e) return (this.tradeAmount = ""), n;
    if ((void 0, "05" === t || "18" === t)) {
      if (e.startsWith("0") && 1 < e.length)
        return mListener.onError("INPUT_INVALID"), void 0, (n = !1);
    } else if (e.startsWith("0"))
      return mListener.onError("INPUT_INVALID"), void 0, (n = !1);
    -1 !== e.indexOf(".") &&
      (void 0, mListener.onError("INPUT_INVALID_FORMAT"), (n = !1));
  } else
    "05" !== t &&
      "18" !== t &&
      (mListener.onError("INPUT_INVALID"), void 0, (n = !1));
  return n;
}
function doTrade(e, t) {
  10 <= e ||
    (checkAmount(mTradeAmount, mTradeType)
      ? EmvPolCard(
          mTradeAmount,
          t,
          mAmountIcon,
          e,
          mCardTmode,
          mTradeType,
          mCurrencyCode,
          cDisplayStr
        )
      : (mListener.onError("Input invalid"), void 0));
}
function EmvPolCard(e, t, n, r, o, a, s, i) {
  var u,
    l = 0,
    c = new Array(),
    y = new Array(),
    g = new Array(),
    m = new Array(),
    d = new Array(),
    p = new Array(),
    C = new Array(),
    A = new Array(),
    f = new Array(),
    D = (new Array(), 0),
    n = (isEmpty(n) || (D = (c = hexStr2Bytes(n.trim())).length), 0),
    e =
      (isEmpty(e) || (n = (y = getUTF8Bytes(e.trim())).length),
      getFormatDateyyyyMMddHHmmss()),
    R = 0,
    e = (isEmpty(e) || (R = (g = hexStr2Bytes(e.trim())).length), 0),
    i = (isEmpty(i) || (e = (m = hexStr2Bytes(i.trim())).length), 0),
    E =
      (isEmpty(mFormatId) || (i = (d = hexStr2Bytes(mFormatId.trim())).length),
      0),
    _ =
      (isEmpty(mBatchId) || (E = (p = hexStr2Bytes(mBatchId.trim())).length),
      0),
    T =
      (isEmpty(mAmountPoint) ||
        (_ = (C = hexStr2Bytes(mAmountPoint.trim())).length),
      0),
    P =
      (isEmpty(mSaveLogFlag) ||
        (T = (A = hexStr2Bytes(mSaveLogFlag.trim())).length),
      0),
    S =
      (isEmpty("00") || (P = (f = hexStr2Bytes("00".trim())).length),
      (u = hexStr2Bytes("313431323137")).length),
    I = new Array(
      1 +
        n +
        1 +
        1 +
        D +
        1 +
        1 +
        R +
        1 +
        1 +
        1 +
        1 +
        1 +
        1 +
        2 +
        1 +
        e +
        8 +
        1 +
        i +
        1 +
        E +
        1 +
        _ +
        1 +
        T +
        1 +
        P +
        1 +
        S
    ),
    y =
      ((I[l++] = n),
      arrCopyArr(y, 0, I, l, n),
      (l += n),
      o === CardTradeMode.CardTradeMode_ONLY_INSERT_CARD
        ? (I[l++] = 1)
        : o === CardTradeMode.CardTradeMode_ONLY_SWIPE_CARD
        ? (I[l++] = 2)
        : o === CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD
        ? (I[l++] = 3)
        : o === CardTradeMode.CardTradeMode_UNALLOWED_LOW_TRADE
        ? (I[l++] = 4)
        : o === CardTradeMode.CardTradeMode_SWIPE_INSERT_CARD
        ? (I[l++] = 5)
        : o ==
          CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD_UNALLOWED_LOW_TRADE
        ? (I[l++] = 6)
        : o === CardTradeMode.CardTradeMode_ONLY_TAP_CARD
        ? (I[l++] = 7)
        : o === CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD_NOTUP
        ? (I[l++] = 8)
        : o ==
          CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD_NOTUP_UNALLOWED_LOW_TRADE
        ? (I[l++] = 9)
        : o === CardTradeMode.CardTradeMode_TAP_INSERT_CARD
        ? (I[l++] = 11)
        : o === CardTradeMode.CardTradeMode_TAP_INSERT_CARD_NOTUP
        ? (I[l++] = 10)
        : o === CardTradeMode.CardTradeMode_SWIPE_TAP_INSERT_CARD_DOWN
        ? (I[l++] = 12)
        : (I[l++] = 3),
      (I[l++] = D),
      arrCopyArr(c, 0, I, l, D),
      (l += D),
      mDoTradeMode === DoTradeMode.CHECK_CARD_NO_IPNUT_PIN
        ? (I[l++] = 1)
        : mDoTradeMode === DoTradeMode.IS_DEBIT_OR_CREDIT
        ? (I[l++] = 3)
        : (I[l++] = 0),
      (I[l++] = R),
      arrCopyArr(g, 0, I, l, R),
      (l += R),
      (I[l++] = 0),
      (I[l++] = 0),
      (I[l++] = r),
      (I[l++] = 0),
      (I[l++] = 1),
      isEmpty(a) && (a = "01"),
      (I[l++] = hexStr2Bytes(a)[0]),
      3 === (s = isEmpty(s) ? "0156" : s).length && (s = "0" + s),
      (I[l++] = hexStr2Bytes(s)[0]),
      (I[l++] = hexStr2Bytes(s)[1]),
      (I[l++] = e),
      arrCopyArr(m, 0, I, l, e),
      (l += e),
      (I[l++] = i),
      arrCopyArr(d, 0, I, l, d.length),
      (l += i),
      (I[l++] = E),
      arrCopyArr(p, 0, I, l, p.length),
      (l += E),
      (I[l++] = _),
      arrCopyArr(C, 0, I, l, C.length),
      (l += _),
      (I[l++] = T),
      arrCopyArr(A, 0, I, l, A.length),
      (l += T),
      (I[l++] = P),
      arrCopyArr(f, 0, I, l, f.length),
      (l += P),
      (I[l++] = S),
      arrCopyArr(u, 0, I, l, u.length),
      (l += S),
      calMac(I, I.length - 8)),
    n =
      (arrCopyArr(y, 0, I, l, 8),
      (l += 8),
      mListener.onRequestWaitingUser(""),
      CommandDownlink2(22, 32, t, I),
      getDownPBytes());
  startSession(new Uint8Array(n).buffer, onReceiveDateListener, 15);
}
function EMVCvmSetPin(e) {
  var t,
    n = 0,
    r = new Array(512);
  (r[n++] = hexStr2Bytes(pinMode)[0]),
    (e =
      ("" === e || null === e
        ? ((r[n++] = 0),
          (r[n++] = 1),
          (r[n++] = 0),
          arrCopyArr(r, 0, (t = new Array(n)), 0, n))
        : ((e = getUTF8Bytes(e)),
          (r[n++] = e.length),
          arrCopyArr(e, 0, r, n, e.length),
          (n += e.length),
          (r[n++] = 1),
          (r[n++] = 0),
          arrCopyArr(r, 0, (t = new Array(n)), 0, n)),
      CommandDownlink2(22, 52, 60, t),
      getDownPBytes())),
    startSession(new Uint8Array(e).buffer, onReceiveDateListener, 15);
}
function onReceiveDateListener(e) {
  if ((void 0, "01" === e.substring(18, 20) && "1620" === e.substring(8, 12))) {
    mListener.onDoTradeResult(DoTradeResult.ICC, null);
    CommandDownlink2(22, 48, 60, EMVStart(EmvOption.START));
    var t = getDownPBytes();
    void 0, startSession(new Uint8Array(t).buffer, onReceiveDateListener, 5);
  } else if ("00" === e.substring(18, 20) && "1620" === e.substring(8, 12))
    checkCardResult(DoTradeResult.MCR, e);
  else if ("03" === e.substring(18, 20) && "1620" === e.substring(8, 12))
    checkCardResult(DoTradeResult.NFC_ONLINE, e);
  else if ("04" === e.substring(18, 20) && "1620" === e.substring(8, 12))
    checkCardResult(DoTradeResult.NFC_OFFLINE, e);
  else if ("05" === e.substring(18, 20) && "1620" === e.substring(8, 12))
    mListener.onDoTradeResult(DoTradeResult.NFC_DECLINED, null);
  else if ("24" === e.substring(6, 8) && "1634" === e.substring(8, 12)) {
    var n = parseInt(e.substring(14, 18), 16);
    continueEmvProcess((r = e.substring(18, 18 + 2 * n)));
  } else if ("32" === e.substring(6, 8) && "1634" === e.substring(8, 12))
    mListener.onRequestSetPin();
  else if ("24" === e.substring(6, 8) && "1630" === e.substring(8, 12)) {
    var n = parseInt(e.substring(14, 18), 16),
      r = e.substring(18, 18 + 2 * n);
    if ((void 0, void 0, "02" === e.substring(12, 14))) {
      var o = new Array(),
        a = 0,
        s = parseInt(r.substring(a, a + 2), 16);
      void 0, (a += 2);
      for (var i = 0; i < s; i++) {
        var a = a + 2 + 2,
          u = parseInt(r.substring(a, a + 2), 16),
          l = ((a += 2), hex2Ascii(r.substring(a, a + 2 * u)));
        (a += 2 * u), o.push(l);
      }
      mListener.onRequestSelectEmvApp(o);
    } else
      "31" === e.substring(12, 14) || "32" === e.substring(12, 14)
        ? mListener.onRequestSetPin()
        : continueEmvProcess(r);
  } else
    "241640" === e.substring(6, 12) &&
      (void 0,
      (n = parseInt(e.substring(14, 18), 16)),
      void 0,
      (r = bufData + e.substring(18, 18 + 2 * n)),
      void 0,
      (t = Str2Bytes(r)),
      void 0,
      (n = (e = analysisEmvResult(t))[0]),
      (t = e[1]),
      e[2],
      e[3],
      (e = e[4]),
      void 0,
      n === EMV_TRANS_ACCEPT
        ? t === REVERSAL
          ? (mListener.onRequestDisplay(Display.REMOVE_CARD),
            mListener.onReturnReversalData(e),
            mListener.onRequestTransactionResult(TransactionResult.DECLINED))
          : (t !== FINA_CONFIRM && t !== BATCH_DC) ||
            (mListener.onRequestDisplay(Display.REMOVE_CARD),
            mListener.onRequestBatchData(e),
            mListener.onRequestTransactionResult(TransactionResult.APPROVED))
        : n === EMV_TRANS_DENIAL &&
          (t === ONLINE_ADVICE || t === OFFLINE_ADVICE
            ? (mListener.onRequestDisplay(Display.REMOVE_CARD),
              mListener.onRequestBatchData(e),
              mListener.onRequestTransactionResult(TransactionResult.DECLINED))
            : REVERSAL === t &&
              (mListener.onRequestDisplay(Display.REMOVE_CARD),
              mListener.onReturnReversalData(e),
              mListener.onRequestTransactionResult(
                TransactionResult.DECLINED
              ))));
}
function continueEmvProcess(e) {
  var e = analysisEmvResult(hexStr2Bytes(e)),
    t = e[0],
    n = (e[1], e[2], e[3], e[4]);
  EMV_TRANS_GOONLINE === t
    ? mListener.onRequestOnlineProcess(n)
    : emvGoOffLine(e);
}
function emvGoOffLine(e) {
  var t = e[0],
    n = e[1],
    e = (e[2], e[3], e[4]);
  if (EMV_TRANS_DENIAL === t) {
    if (ONLINE_ADVICE === n || OFFLINE_ADVICE === n)
      return (
        mListener.onReqestDisplay(Display.REMOVE_CARD),
        mListener.onRequestBatchData(e),
        void mListener.onRequestTransactionResult(TransactionResult.DECLINED)
      );
    if (REVERSAL === n)
      return (
        mListener.onRequestDisplay(Display.REMOVE_CARD),
        mListener.onReturnReversalData(e),
        void mListener.onRequestTransactionResult(TransactionResult.DECLINED)
      );
  } else if (EMV_TRANS_ACCEPT === t) {
    if (REVERSAL === n)
      return (
        mListener.onRequestDisplay(Display.REMOVE_CARD),
        mListener.onReturnReversalData(e),
        void mListener.onRequestTransactionResult(TransactionResult.DECLINED)
      );
    if (FINA_CONFIRM === n || BATCH_DC === n)
      return (
        mListener.onRequestDisplay(Display.REMOVE_CARD),
        mListener.onRequestBatchData(e),
        void mListener.onRequestTransactionResult(TransactionResult.APPROVED)
      );
  }
  startSysSession(packageInstructionReset(), null, 5),
    // (logListaner = "onError(Error.UNKNOWN)"),
    console.error("Error Unknown  ");
  void 0;
}
function EMVSelectEMVApp(e) {
  var t = new Array(),
    e = (t.push(e), CommandDownlink2(22, 49, 30, t), getDownPBytes());
  void 0,
    startSysSession(new Uint8Array(e).buffer, null, 60).then(
      function (e) {
        var t;
        0 === getResult() &&
          ((t = upPLength()),
          void 0,
          continueEmvProcess(byteArray2Hex(getUpPBytes(0, t))));
      },
      function (e) {
        void 0;
      }
    );
}
function EMVGoOnLine(e) {
  CommandDownlink2(22, 64, 30, hexStr2Bytes(e));
  e = getDownPBytes();
  void 0, startSession(new Uint8Array(e).buffer, onReceiveDateListener, 60);
}
function checkCardResult(e, t) {
  var n,
    r,
    o,
    a = new Array(),
    t = (void 0, hexStr2Bytes(t.substring(14, 14 + t.length - 16))),
    s = (t[2], 4),
    i = t.length,
    u = t[s++],
    l = byteArray2Hex(getBytesFromArr(s, u, t)),
    u = ((s += u), a.push(l), t[s++]),
    l = byteArray2Hex(getBytesFromArr(s, u, t)),
    u = ((s += u), a.push(l), t[s++]),
    c = byteArray2Hex(getBytesFromArr(s, u, t)),
    u = ((s += u), a.push(c), t[s++]),
    y = ab2str(getBytesFromArr(s, u, t)),
    u = ((s += u), a.push(y), t[s++]),
    y = ab2str(getBytesFromArr(s, u, t)),
    u = ((s += u), a.push(y), t[s++]),
    y = ab2str(getBytesFromArr(s, u, t)),
    u = ((s += u), a.push(y), t[s++]),
    y = ab2str(getBytesFromArr(s, u, t)),
    u = ((s += u), a.push(y), t[s++]),
    y = ab2str(getBytesFromArr(s, u, t)),
    u = ((s += u), a.push(y), t[s++]),
    y = byteArray2Hex(getBytesFromArr(s, u, t)),
    u = ((s += u), a.push(y), t[s++]),
    y = byteArray2Hex(getBytesFromArr(s, u, t)),
    u = ((s += u), a.push(y), t[s++]),
    y = byteArray2Hex(getBytesFromArr(s, u, t)),
    u =
      ((s += u),
      a.push(y),
      s < i
        ? ((u = t[s++]),
          (r = byteArray2Hex(getBytesFromArr(s, u, t))),
          (s += u),
          a.push(r),
          (y = t[s++]),
          (n = byteArray2Hex(getBytesFromArr(s, y, t))),
          (s += y),
          a.push(n))
        : (n = r = ""),
      "");
  s < i &&
    ((y = t[s++]), (u = ab2str(getBytesFromArr(s, y, t))), (s += y), a.push(u)),
    s < i &&
      (((r = new Array(1))[0] = t[s++]),
      (n = byteArrayToInt(r)),
      ((y = new Array(1))[0] = t[s++]),
      (u = byteArrayToInt(y)),
      ((r = new Array(1))[0] = t[s++]),
      (y = byteArrayToInt(r)),
      n.toString(),
      u.toString(),
      y.toString()),
    s < i
      ? ((r = t[s++]), (o = byteArray2Hex(getBytesFromArr(s, r, t))), (s += r))
      : (o = ""),
    a.push(o),
    l.toString(),
    c.toString();
  mListener.onDoTradeResult(e, a);
}
function getNFCBatchData(t, n) {
  getICCTag(1, 0, "").then(
    function (e) {
      0 === getResult() &&
        ((e = byteArray2Hex(getUpPBytes(0, upPLength()))), t(e));
    },
    function (e) {
      n(e), void 0;
    }
  );
}
function getNewICCTag(e, t, n, r, o) {
  getICCTag(e, t, n).then(
    function (e) {
      0 === getResult() &&
        ((e = byteArray2Hex(getUpPBytes(0, upPLength()))), r(e));
    },
    function (e) {
      o(e), void 0;
    }
  );
}
function getICCTagFunction(e, t, n, r, o) {
  getICCTag(e, t, n).then(
    function (e) {
      0 === getResult() &&
        ((e = byteArray2Hex(getUpPBytes(0, upPLength()))), r(e));
    },
    function (e) {
      o(e), void 0;
    }
  );
}
function getICCTag(e, t, n) {
  new Array();
  var r = "00",
    e =
      (CommandDownlink2(
        22,
        81,
        5,
        hexStr2Bytes(
          (r =
            (r =
              (r =
                (r += byteArray2Hex(intToHex(e))) +
                byteArray2Hex(intToHex(e))) + byteArray2Hex(intToHex(t))) +
            (n = isEmpty(n) ? "00" : n)).trim()
        )
      ),
      getDownPBytes());
  return void 0, startSysSession(new Uint8Array(e).buffer, null, 5);
}
function analysisEmvResult(e) {
  void 0;
  var t = new Array();
  if (null === e || 0 === e.length) return t;
  var n = 0,
    r = (n++, (encMode = e[n++]), new Array(1)),
    r = ((r[0] = e[n++]), byteArray2Hex(r)),
    o = new Array(1),
    o = ((o[0] = e[n++]), byteArray2Hex(o)),
    a = new Array(1),
    a = ((a[0] = e[n++]), byteArrayToInt(a)),
    s = new Array(a),
    i = (arrCopyArr(e, 5, s, 0, a), byteArray2Hex(s)),
    a = ((n += a), e[n++]),
    u = (arrCopyArr(e, n, (s = new Array(a)), 0, a), byteArray2Hex(s)),
    a = ((n += a), new Array(2)),
    a = ((a[0] = e[n]), (a[1] = e[n + 1]), byteArrayToInt(a)),
    l = (arrCopyArr(e, (n += 2), (s = new Array(a)), 0, a), byteArray2Hex(s)),
    c = "";
  return (
    (n += a) < e.length &&
      ((l =
        (a = 2 === (a = byteArray2Hex(intToHex(a))).length ? "00" + a : a) + l),
      (a = e.length - n),
      arrCopyArr(e, n, (s = new Array(a)), 0, a),
      (c = byteArray2Hex(s)),
      0),
    (l += c),
    t.push(r),
    t.push(o),
    t.push(i),
    t.push(u),
    t.push(l),
    void 0,
    t
  );
}
function anlysDataCommon(e, t) {
  var n = new Array();
  if (0 === encMode || 16 === encMode || 38 === encMode || 48 === encMode)
    return n.push(t), n;
  var t = Str2Bytes(t),
    r = t.length,
    o = 0,
    a = new Array(2),
    a = ((a[0] = t[o]), (a[1] = t[o + 1]), byteArrayToInt(a)),
    s = ((o += 2), new Array(a)),
    s = (arrCopyArr(t, o, s, 0, a), byteArray2Hex(s));
  if (r <= (o += a)) return n.push(s), n;
  o += 2;
  var i,
    u,
    a = t[o++],
    l = new Array(a),
    c = (arrCopyArr(t, o, l, 0, a), byteArray2Hex(l)),
    a = ((o += a), t[o++]),
    y = (arrCopyArr(t, o, (l = new Array(a)), 0, a), byteArray2Hex(l)),
    a = ((o += a), t[o++]),
    g = (arrCopyArr(t, o, (l = new Array(a)), 0, a), byteArray2Hex(l)),
    a = ((o += a), t[o++]),
    m = (arrCopyArr(t, o, (l = new Array(a)), 0, a), ab2str(l)),
    a = ((o += a), t[o++]),
    d = (arrCopyArr(t, o, (l = new Array(a)), 0, a), ab2str(l)),
    a = ((o += a), t[o++]),
    p = (arrCopyArr(t, o, (l = new Array(a)), 0, a), ab2str(l)),
    a = ((o += a), t[o++]),
    C = (arrCopyArr(t, o, (l = new Array(a)), 0, a), ab2str(l)),
    a = ((o += a), t[o++]),
    A = ab2str(l),
    a = ((o += a), t[o++]),
    f = (arrCopyArr(t, o, (l = new Array(a)), 0, a), byteArray2Hex(l)),
    a = ((o += a), t[o++]),
    D = (arrCopyArr(t, o, (l = new Array(a)), 0, a), byteArray2Hex(l)),
    a = ((o += a), t[o++]),
    R = (arrCopyArr(t, o, (l = new Array(a)), 0, a), byteArray2Hex(l)),
    E = "",
    _ = "",
    a =
      ((o += a) < r &&
        ((a = t[o++]),
        arrCopyArr(t, o, (l = new Array(a)), 0, a),
        (E = byteArray2Hex(l)),
        (o += a)),
      o < r &&
        ((a = t[o++]),
        arrCopyArr(t, o, (l = new Array(a)), 0, a),
        (_ = byteArray2Hex(l)),
        (o += a)),
      ""),
    T =
      (o < r &&
        ((T = t[o++]),
        arrCopyArr(t, o, (l = new Array(T)), 0, T),
        (a = ab2str(l)),
        (o += T)),
      ""),
    P = "",
    S = "",
    I =
      (o < r && ((T = t[o++] + ""), (P = t[o++] + ""), (S = t[o++] + "")), ""),
    l =
      (o < r &&
        ((u = t[o++]),
        arrCopyArr(t, o, (l = new Array(u)), 0, u),
        (I = byteArray2Hex(l)),
        (o += u)),
      "");
  return (
    o < r &&
      ((u = t[o++]),
      arrCopyArr(t, o, (i = new Array(u)), 0, u),
      (l = byteArray2Hex(i)),
      (o += u)),
    o < r &&
      ((i = t[o++]),
      arrCopyArr(t, o, (u = new Array(i)), 0, i),
      byteArray2Hex(u),
      (o += i)),
    n.push(m),
    n.push(d),
    n.push(p),
    n.push(A),
    n.push(C),
    n.push(T),
    n.push(P),
    n.push(S),
    n.push(c),
    n.push(y),
    n.push(g),
    n.push(f),
    n.push(E),
    n.push(_),
    n.push(a),
    n.push(I),
    n.push(s),
    n.push(l),
    n.push(D),
    n.push(R),
    void 0,
    n
  );
}
function EMVStart(e) {
  void 0;
  var t = 19 + mTradeAmount.length + 1 + mCashbackAmount.length + 2 + 1,
    t = new Array(t),
    n = 0,
    e =
      (e === EmvOption.START
        ? (t[n++] = 0)
        : e === EmvOption.START_WITH_FORCE_ONLINE
        ? (t[n++] = 1)
        : e === EmvOption.START_WITH_FORCE_PIN
        ? (t[n++] = 2)
        : e === EmvOption.START_WITH_FORCE_ONLINE_FORCE_PIN && (t[n++] = 3),
      (t[n++] = hexStr2Bytes(mTradeType)[0]),
      getFormatDateyyyyMMddHHmmss()),
    e =
      mTradeAmount.length <= 8
        ? hexStr2Bytes(e + "FF")
        : hexStr2Bytes(e + "06"),
    r = (arrCopyArr(e, 0, t, n, e.length), (n += e.length), ""),
    r = 8 < mTradeAmount.length ? "FFFFFFFFFFFF" : "FFFFFFFF",
    o = 0,
    o =
      (isEmpty(mTradeAmount) || (o = mTradeAmount.length),
      arrCopyArr(
        (e = hexStr2Bytes((r = r.substring(0, r.length - o) + mTradeAmount))),
        0,
        t,
        n,
        e.length
      ),
      (n += e.length),
      (r = 8 < mTradeAmount.length ? "" : "0000"),
      arrCopyArr(
        (e = hexStr2Bytes(
          (r += mCurrencyCode =
            3 === mCurrencyCode.length ? "0" + mCurrencyCode : mCurrencyCode)
        )),
        0,
        t,
        n,
        e.length
      ),
      (n += e.length),
      (t[n++] = mTradeAmount.length + 1),
      arrCopyArr(getUTF8Bytes(mTradeAmount), 0, t, n, mTradeAmount.length),
      (n += mTradeAmount.length),
      (t[n++] = 0),
      !isEmpty(mCashbackAmount) && 0 < mCashbackAmount.length
        ? ((t[n++] = byte(mCashbackAmount.length())),
          arrCopyArr(
            getUTF8Bytes(mCashbackAmount),
            0,
            t,
            n,
            mCashbackAmount.length
          ),
          (n += mCashbackAmount.length))
        : ((t[n++] = 1), (t[n++] = 48)),
      intToHex(20));
  return arrCopyArr(o, 0, t, n++, 1), t;
}

(DoTrade.prototype.doTrade = function (e, t) {
  doTrade(e, t);
}),
  (DoTrade.prototype.sendPin = function (e) {
    sendPin(e);
  }),
  (DoTrade.prototype.doCheckCard = function (e, t) {
    setDoTradeMode(DoTradeMode.CHECK_CARD_NO_IPNUT_PIN), doTrade(e, t);
  }),
  (DoTrade.prototype.selectEmvApp = function (e) {
    void 0, EMVSelectEMVApp(e);
  }),
  (DoTrade.prototype.sendOnlineProcessResult = function (e) {
    void 0, EMVGoOnLine(e);
  }),
  (DoTrade.prototype.getNFCBatchData = function (e, t) {
    return getNFCBatchData(e, t);
  }),
  (DoTrade.prototype.getNewICCTag = function (e, t, n, r, o) {
    return getNewICCTag(e, t, n, r, o);
  }),
  (DoTrade.prototype.getICCTag = function (e, t, n, r, o) {
    return getICCTagFunction(e, t, n, r, o);
  });
var platformPos,
  mOperationType,
  EMVManager = function (e) {
    writeObj(e), (mListener = e), void 0, writeObj(this);
  },
  platformFlag = 1,
  WRITE_MAX_LEN =
    ((EMVManager.prototype.updateEmvAPP = function (e, t) {
      updateEmvAPP(e, t);
    }),
    (EMVManager.prototype.updateEmvCAPK = function (e, t) {
      updateEmvCAPK(e, t);
    }),
    (EMVManager.prototype.updateEmvConfig = function (e, t) {
      updateEmvConfig(e, t);
    }),
    (EMVManager.prototype.updateEMVConfigByXml = function (e) {
      updateEMVConfigByXml(e);
    }),
    100);
function updateEmvAPP(e, t) {
  null !== e &&
    (isEmpty(t) && (t = ""),
    CommandDownlink2(
      23,
      160,
      15,
      hexStr2Bytes(updateEMV((mOperationType = e), t))
    ),
    (e = getDownPBytes()),
    void 0,
    startSession(new Uint8Array(e).buffer, onReturnUpdateEmvAPPResult, 5));
}
function updateEMV(e, t) {
  var n = "";
  switch (e) {
    case EMVDataOperation.CLEAR:
      n = "01";
      break;
    case EMVDataOperation.ADD:
      n = "02" + t;
      break;
    case EMVDataOperation.DELETE:
      n = "03" + t;
      break;
    case EMVDataOperation.ATTAINLIST:
      n = "04";
      break;
    case EMVDataOperation.UPDATE:
      n = "05" + t;
      break;
    case EMVDataOperation.GETEMV:
      n = "06" + t;
  }
  return n;
}
function onReturnUpdateEmvAPPResult(e) {
  if ((void 0, 0 === getResult()))
    if (mOperationType === EMVDataOperation.ATTAINLIST) {
      for (
        var t,
          n = byteArray2Hex(getUpPBytes(0, upPLength())),
          r = n.substring(0, 2),
          o = 0;
        o < n.length;
        o++
      )
        1 === n.search("1000000000000000000000000000000000") &&
          ((t = parseInt(r, 16) - 1),
          (n = n.replace("1000000000000000000000000000000000", "")),
          (r =
            t < 17
              ? "0" + toHex(t).substr(2, 2).toUpperCase()
              : toHex(t).substr(2, 2).toUpperCase()));
      (n = r + n.slice(2)), void 0, mListener.onReturnGetEMVListResult(n);
    } else
      mOperationType === EMVDataOperation.GETEMV
        ? ((e = byteArray2Hex(getUpPBytes(0, upPLength()))),
          void 0,
          mListener.onReturnGetEMVListResult(e))
        : (void 0, mListener.onReturnUpdateEMVResult(!0));
  else void 0, mListener.onReturnUpdateEMVResult(!1);
  mOperationType = null;
}
function updateEmvCAPK(e, t) {
  null !== e &&
    e !== EMVDataOperation.UPDATE &&
    (isEmpty(t) && (t = ""),
    CommandDownlink2(
      23,
      161,
      15,
      hexStr2Bytes(updateEMV((mOperationType = e), t))
    ),
    (e = getDownPBytes()),
    void 0,
    startSession(new Uint8Array(e).buffer, onReturnUpdateEmvCAPKResult, 5));
}
function onReturnUpdateEmvCAPKResult(e) {
  if ((void 0, 0 === getResult()))
    if (mOperationType === EMVDataOperation.ATTAINLIST) {
      for (
        var t,
          n = byteArray2Hex(getUpPBytes(0, upPLength())),
          r = n.substring(0, 2),
          o = 0;
        o < n.length;
        o++
      )
        1 === n.search("1000000000000000000000000000000000") &&
          ((t = parseInt(r, 16) - 1),
          (n = n.replace("1000000000000000000000000000000000", "")),
          (r =
            t < 17
              ? "0" + toHex(t).substr(2, 2).toUpperCase()
              : toHex(t).substr(2, 2).toUpperCase()));
      (n = r + n.slice(2)), void 0, mListener.onReturnGetEMVListResult(n);
    } else
      mOperationType === EMVDataOperation.GETEMV
        ? ((e = byteArray2Hex(getUpPBytes(0, upPLength()))),
          void 0,
          mListener.onReturnGetEMVListResult(e))
        : (void 0, mListener.onReturnUpdateEMVRIDResult(!0));
  else void 0, mListener.onReturnUpdateEMVRIDResult(!1);
  mOperationType = null;
}
var mEmvAppCfg = "",
  mEmvCapkCfg = "";
function updateEmvConfig(e, t) {
  isEmpty(e) ||
    e.length % 2 !== 0 ||
    isEmpty(t) ||
    t.length % 2 !== 0 ||
    ((mOffset = 0),
    (mCustomParamString = ""),
    (mCustomParam = null),
    (mEmvAppCfg = e),
    (mEmvCapkCfg = t),
    doUpdateCustomParam(CustomParam.CUSTOM_PARAM_SEG_EMV_APP, 0, mEmvAppCfg));
}
var mCustomParam,
  mOffset = 0,
  mCustomParamString = "";
function doUpdateCustomParam(e, t, n) {
  (mOffset = t), (mCustomParam = e);
  t = (mCustomParamString = n).length / 2;
  startSendCustomParam(OperationLogo.WRITE, e, t).then(
    function (e) {
      if (0 === getResult()) return void 0, updateCustomParam();
    },
    function (e) {
      void 0;
    }
  );
}
function startSendCustomParam(e, t, n) {
  var r = "",
    e =
      (e === OperationLogo.READ ? (r += "00") : (r += "01"),
      t === CustomParam.CUSTOM_PARAM_SEG_EMV_APP
        ? (r += "00")
        : t === CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK
        ? (r += "01")
        : t === CustomParam.CUSTOM_PARAM_SEG_CUSTOM1
        ? (r += "02")
        : t === CustomParam.CUSTOM_PARAM_SEG_CUSTOM2 && (r += "03"),
      n),
    t = (e >> 16) & 255,
    n = (e >> 8) & 255,
    o = 255 & e,
    e =
      (CommandDownlink2(
        22,
        144,
        10,
        hexStr2Bytes(
          (r =
            (r =
              (r =
                (r += byteArray2Hex(intToHex(e >> 24))) +
                byteArray2Hex(intToHex(t))) + byteArray2Hex(intToHex(n))) +
            byteArray2Hex(intToHex(o)) +
            "10")
        )
      ),
      getDownPBytes());
  return void 0, startSysSession(new Uint8Array(e).buffer, null, 5);
}
var mUpdateCustomParamResolve = function () {
    void 0;
  },
  mUpdateCustomParamReject = function () {
    void 0;
  };
function updateCustomParam() {
  var e = "",
    t = hexStr2Bytes(mCustomParamString),
    n = mCustomParamString.length / 2,
    r = mOffset,
    o = (r >> 16) & 255,
    a = (r >> 8) & 255,
    s = 255 & r,
    e = byteArray2Hex(intToHex(r >> 24)),
    o =
      ((e =
        (e = (e += byteArray2Hex(intToHex(o))) + byteArray2Hex(intToHex(a))) +
        byteArray2Hex(intToHex(s))),
      (s = 255 & (r = WRITE_MAX_LEN < (r = n - mOffset) ? WRITE_MAX_LEN : r)),
      (e =
        (e += byteArray2Hex(intToHex((r >> 8) & 255))) +
        byteArray2Hex(intToHex(s))),
      new Array(r)),
    a =
      (arrCopyArr(t, mOffset, o, 0, r),
      CommandDownlink2(22, 160, 15, hexStr2Bytes((e += byteArray2Hex(o)))),
      getDownPBytes());
  void 0,
    (mOffset += r),
    startSession(new Uint8Array(a).buffer, onUpdateCustomParam, 5);
}
function onUpdateCustomParam(e) {
  void 0,
    0 === getResult()
      ? ((e = mCustomParamString.length / 2),
        mOffset < e
          ? (void 0, updateCustomParam())
          : (void 0, stopSendCustomParam(OperationLogo.WRITE, mCustomParam)))
      : mListener.onReturnCustomConfigResult(!1, "");
}
function stopSendCustomParam(e, t) {
  void 0;
  var n = "",
    e =
      (e === OperationLogo.READ ? (n += "00") : (n += "01"),
      t === CustomParam.CUSTOM_PARAM_SEG_EMV_APP
        ? (n += "00")
        : t === CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK
        ? (n += "01")
        : t === CustomParam.CUSTOM_PARAM_SEG_CUSTOM1
        ? (n += "02")
        : t === CustomParam.CUSTOM_PARAM_SEG_CUSTOM2 && (n += "03"),
      CommandDownlink2(22, 145, 15, hexStr2Bytes(n)),
      getDownPBytes());
  void 0,
    t === CustomParam.CUSTOM_PARAM_SEG_EMV_APP
      ? startSysSession(new Uint8Array(e).buffer, null, 5).then(
          function (e) {
            doUpdateCustomParam(
              CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK,
              0,
              mEmvCapkCfg
            );
          },
          function (e) {}
        )
      : (startSysSession(new Uint8Array(e).buffer, null, 5),
        mListener.onReturnCustomConfigResult(!0, ""));
}
function stopSendCustomParam2(e, t) {
  void 0;
  var n = "",
    e =
      (e === OperationLogo.READ ? (n += "00") : (n += "01"),
      t === CustomParam.CUSTOM_PARAM_SEG_EMV_APP
        ? (n += "00")
        : t === CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK
        ? (n += "01")
        : t === CustomParam.CUSTOM_PARAM_SEG_CUSTOM1
        ? (n += "02")
        : t === CustomParam.CUSTOM_PARAM_SEG_CUSTOM2 && (n += "03"),
      CommandDownlink2(22, 145, 10, hexStr2Bytes(n)),
      getDownPBytes());
  return void 0, startSysSession(new Uint8Array(e).buffer, null, 5);
}
var config,
  OperationLogo = { READ: 0, WRITE: 1 },
  CustomParam = {};
function updateEMVConfigByXml(e) {
  void 0,
    (config = analyseEMVData(e)),
    void 0,
    null === config || config.length < 1
      ? mListener.onReturnCustomConfigResult(!1, "xml file is empty")
      : judgePlatform().then(
          function (e) {
            if (0 === getResult()) {
              var t = 0,
                t = hex2Ascii(byteArray2Hex(getUpPBytes(1, getUpPByte(+t))));
              if (
                (void 0,
                (platformPos = "4.0" <= t ? 1 : 0),
                void 0,
                platformPos !== platformFlag)
              )
                return void 0, void void 0;
              checkConfigContent(config, platformPos);
            }
          },
          function (e) {
            void 0, void 0;
          }
        );
}
function analyseEMVData(e) {
  if (((platformFlag = 1), void 0, null !== e)) {
    new Array();
    var t,
      n = e.split("\n"),
      r = new Array(),
      o = "",
      a = new Array();
    void 0;
    for (var s = 0; s < n.length; s++)
      -1 === (t = n[s]).search("<") ||
        t.trim().startsWith("\x3c!--") ||
        (-1 !== t.search("app") &&
          -1 !== o.search("app") &&
          0 !== a.length &&
          (r.push(generateAppOrCapk(0, a)), (a.length = 0)),
        -1 !== t.search("capk") &&
          -1 !== o.search("app") &&
          0 !== a.length &&
          (r.push(generateAppOrCapk(0, a)), (a.length = 0)),
        -1 !== t.search("capk") &&
          -1 !== o.search("capk") &&
          0 !== a.length &&
          (r.push(generateAppOrCapk(1, a)), (a.length = 0)),
        -1 === t.search("app") &&
          -1 === t.search("capk") &&
          a.push(parseLine(t)),
        (o = t));
    return 0 !== a.length && r.push(generateAppOrCapk(1, a)), r;
  }
  void 0;
}
function generateAppOrCapk(e, t) {
  var n,
    r = "",
    e = 0 === e ? "APP" : "CAPK";
  for (n in t) r += t[n];
  e = new resolvableInterface(e, r);
  return void 0, e;
}
function parseLine(e) {
  var t = e.indexOf(">"),
    n = e.indexOf("<"),
    r = e.indexOf("<", t),
    n = e.substring(n + 1, t);
  if (
    ("DF72" === n.toUpperCase() && ((platformFlag = 0), void 0),
    "9F73" === n.toUpperCase())
  )
    return "";
  var o,
    a,
    e = e.substring(t + 1, r),
    t = e.length / 2,
    r = t.toString(16);
  return (
    t < 128
      ? r.length % 2 === 1 && (r = "0" + r)
      : 128 <= t && t < 256
      ? (r = "81" + (r = r.length % 2 === 1 ? "0" + r : r))
      : 256 <= t && t < 65536
      ? ((a = ((t >> 8) & 255).toString(16)).length % 2 === 1 && (a = "0" + a),
        (r = "82" + (r = r.length % 2 === 1 ? a + "0" + r : r)))
      : 65536 <= t &&
        t < 16777216 &&
        ((o = ((t >> 16) & 255).toString(16)),
        (a = ((t >> 8) & 255).toString(16)),
        o.length % 2 === 1 && (o = "0" + o),
        a.length % 2 === 1 && (a = "0" + a),
        (r = "83" + (r = r.length % 2 === 1 ? o + a + "0" + r : r))),
    n + r + e
  );
}
(CustomParam.CUSTOM_PARAM_SEG_CUSTOM1 = 0),
  (CustomParam.CUSTOM_PARAM_SEG_CUSTOM2 = 1),
  (CustomParam.CUSTOM_PARAM_SEG_EMV_APP = 2),
  (CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK = 3);
var resolvableInterface = function (e, t) {
  (this.type = e), (this.data = t);
};
function judgePlatform() {
  CommandDownlink(17, 48, 5);
  var e = getDownPBytes();
  return void 0, startSysSession(new Uint8Array(e).buffer, null, 5);
}
var totalCount = 0,
  aidByteCount = 0,
  capkByteCount = 0,
  aidByteCountSize = 0,
  capkByteCountSize = 0;
function checkConfigContent(e, t) {
  for (var n in ((capkByteCountSize =
    aidByteCountSize =
    capkByteCount =
    aidByteCount =
    totalCount =
      0),
  e))
    "APP" === e[n].type
      ? aidByteCount++
      : "CAPK" === e[n].type && capkByteCount++;
  if (1 === t) {
    if (
      ((totalCount =
        (aidByteCountSize = 384 * aidByteCount) +
        (capkByteCountSize = 384 * capkByteCount)),
      void 0,
      24576 < totalCount)
    )
      return void 0, void void 0;
  } else if (
    ((totalCount =
      (aidByteCountSize = 670 * aidByteCount) +
      (capkByteCountSize = 288 * capkByteCount)),
    void 0,
    32768 < totalCount)
  )
    return void 0, void void 0;
  sendAppAndCapkSizeToPos(
    aidByteCountSize,
    CustomParam.CUSTOM_PARAM_SEG_EMV_APP
  );
}
function sendAppAndCapkSizeToPos(e, t) {
  startSendCustomParam(OperationLogo.WRITE, t, e).then(
    function (e) {
      0 === getResult()
        ? (void 0,
          stopSendCustomParam2(OperationLogo.WRITE, t).then(
            function (e) {
              0 === getResult() ? void 0 : void 0,
                t === CustomParam.CUSTOM_PARAM_SEG_EMV_APP
                  ? (void 0,
                    sendAppAndCapkSizeToPos(
                      capkByteCountSize,
                      CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK
                    ))
                  : t === CustomParam.CUSTOM_PARAM_SEG_EMV_CAPK &&
                    (void 0,
                    (emvRsult = !(capkCleFlag = appCleFlag = !1)),
                    (msg = new String()),
                    updateEmvCOnfigRunnable(config, 0));
            },
            function (e) {
              void 0, void 0;
            }
          ))
        : void 0;
    },
    function (e) {
      void 0, void 0;
    }
  );
}
var appCleFlag = !1,
  capkCleFlag = !1,
  emvRsult = !0,
  msg = new String();
function updateEmvCOnfigRunnable(n, r) {
  r < n.length
    ? ("APP" === n[r].type &&
        (appCleFlag
          ? updateEmvAPP2(EMVDataOperation.ADD, n[r].data).then(
              function (e) {
                var t;
                if (0 !== getResult())
                  return (
                    (emvRsult = !1),
                    (t = n[r].data.substring(4, 6)),
                    (t = n[r].data.substring(6, 5 + t)),
                    (msg = msg + "AID:" + t + "fail"),
                    mListener.onReturnCustomConfigResult(
                      emvRsult,
                      msg.toString()
                    ),
                    !0
                  );
                void 0, updateEmvCOnfigRunnable(n, ++r);
              },
              function (e) {
                void 0, void 0;
              }
            )
          : updateEmvAPP2(EMVDataOperation.CLEAR, "").then(
              function (e) {
                0 === getResult()
                  ? ((appCleFlag = !0),
                    void 0,
                    updateEmvAPP2(EMVDataOperation.ADD, n[r].data).then(
                      function (e) {
                        var t;
                        if (0 !== getResult())
                          return (
                            (emvRsult = !1),
                            (t = n[r].data.substring(4, 6)),
                            (t = n[r].data.substring(6, 5 + t)),
                            (msg = msg + "AID:" + t + "fail"),
                            mListener.onReturnCustomConfigResult(
                              emvRsult,
                              msg.toString()
                            ),
                            !0
                          );
                        void 0, updateEmvCOnfigRunnable(n, ++r);
                      },
                      function (e) {
                        void 0, void 0;
                      }
                    ))
                  : ((emvRsult = !1),
                    (msg += "AID clean fail"),
                    mListener.onReturnCustomConfigResult(
                      emvRsult,
                      msg.toString()
                    ));
              },
              function (e) {
                void 0, void 0;
              }
            )),
      "CAPK" === n[r].type &&
        (capkCleFlag
          ? updateEmvCAPK2(EMVDataOperation.ADD, n[r].data).then(
              function (e) {
                var t;
                if (0 !== getResult())
                  return (
                    (emvRsult = !1),
                    (t = n[r].data.substring(4, 6)),
                    (t = n[r].data.substring(6, 5 + t)),
                    (msg = msg + "capk:" + t + "fail"),
                    mListener.onReturnCustomConfigResult(
                      emvRsult,
                      msg.toString()
                    ),
                    !0
                  );
                void 0, updateEmvCOnfigRunnable(n, ++r);
              },
              function (e) {
                void 0, void 0;
              }
            )
          : updateEmvCAPK2(EMVDataOperation.CLEAR, "").then(
              function (e) {
                0 === getResult()
                  ? ((capkCleFlag = !0),
                    void 0,
                    updateEmvCAPK2(EMVDataOperation.ADD, n[r].data).then(
                      function (e) {
                        var t;
                        if (0 !== getResult())
                          return (
                            (emvRsult = !1),
                            (t = n[r].data.substring(4, 6)),
                            (t = n[r].data.substring(6, 5 + t)),
                            (msg = msg + "capk:" + t + "fail"),
                            mListener.onReturnCustomConfigResult(
                              emvRsult,
                              msg.toString()
                            ),
                            !0
                          );
                        void 0, updateEmvCOnfigRunnable(n, ++r);
                      },
                      function (e) {
                        void 0, void 0;
                      }
                    ))
                  : ((emvRsult = !1),
                    (msg += "CAPK clean fail"),
                    mListener.onReturnCustomConfigResult(
                      emvRsult,
                      msg.toString()
                    ));
              },
              function (e) {
                void 0, void 0;
              }
            )))
    : mListener.onReturnCustomConfigResult(emvRsult, msg.toString());
}
function updateEmvAPP2(e, t) {
  if (null !== e && e !== EMVDataOperation.UPDATE)
    return (
      CommandDownlink2(
        23,
        160,
        15,
        hexStr2Bytes(updateEMV((mOperationType = e), t))
      ),
      (e = getDownPBytes()),
      void 0,
      startSysSession(new Uint8Array(e).buffer, null, 5)
    );
}
function updateEmvCAPK2(e, t) {
  if (null !== e && e !== EMVDataOperation.UPDATE)
    return (
      CommandDownlink2(
        23,
        161,
        15,
        hexStr2Bytes(updateEMV((mOperationType = e), t))
      ),
      (e = getDownPBytes()),
      void 0,
      startSysSession(new Uint8Array(e).buffer, null, 5)
    );
}
var mParas,
  GetMifareCardInfo = function (e) {
    writeObj(e), (mListener = e), void 0, writeObj(this);
  };
function pollOnMifareCard(e) {
  doMifareCard("01", e);
}
function finishMifareCard(e) {
  doMifareCard("0E", e);
}
function doMifareCard(e, t) {
  CommandDownlink2(23, 128, t, hexStr2Bytes((mParas = e)));
  e = getDownPBytes();
  void 0, startSession(new Uint8Array(e).buffer, onSearchMifareCardResult, t);
}
function onSearchMifareCardResult(e) {
  void 0;
  var t,
    n,
    r,
    o,
    a,
    s,
    i,
    u,
    e = 1;
  0 === getResult()
    ? "01" === mParas
      ? ((u = intToHexValue(getUpPBytes(e++, 1))),
        (i = intToHexValue(getUpPBytes(e++, 1))),
        void 0,
        (t = byteArray2Hex(getUpPBytes(e, 2))),
        (n = byteArray2Hex(getUpPBytes((e += 2), 1))),
        void 0,
        (e += 1),
        (r = getUpPBytes(e++, 1)),
        (o = byteArray2Hex(getUpPBytes(e, r))),
        (e += r),
        (s = ""),
        0 !== (a = getUpPBytes(e++, 1)) &&
          (s = byteArray2Hex(getUpPBytes(e, a))),
        void 0,
        ((i = {
          cardType: i,
          ATQA: t,
          SAK: n,
          cardUidLen: r + "",
          cardUid: o,
          cardAtsLen: a + "",
          cardAts: s,
        }).status = "00" === u ? "poll card success!" : "poll card fail!"),
        mListener.onSearchMifareCardResult(i))
      : "0E" === mParas &&
        ("00" === (u = intToHexValue(getUpPBytes(e++, 1)))
          ? mListener.onFinishMifareCardResult(!0)
          : mListener.onFinishMifareCardResult(!1))
    : 64 === getResult()
    ? mListener.onSearchMifareCardCanceled()
    : ("01" === mParas && mListener.onSearchMifareCardResult(null),
      "0E" === mParas && mListener.onFinishMifareCardResult(!1));
}
(GetMifareCardInfo.prototype.pollOnMifareCard = function (e) {
  pollOnMifareCard(e);
}),
  (GetMifareCardInfo.prototype.finishMifareCard = function (e) {
    finishMifareCard(e);
  });
var getPosInfo = function (e) {
  writeObj(e), (mListener = e), void 0, writeObj(this);
};
function getQPosInfo() {
  CommandDownlink(17, 48, 5);
  var e = getDownPBytes();
  void 0, startSession(new Uint8Array(e).buffer, onQposInfoResult, 5);
}
function onQposInfoResult(e) {
  void 0, 0 === getResult() ? anlycPosInfo() : void 0;
}
function getQPosId() {
  CommandDownlink(16, 0, 5);
  var e = getDownPBytes();
  void 0, startSession(new Uint8Array(e).buffer, onQposIdResult, 5);
}
function onQposIdResult(e) {
  void 0, 0 === getResult() ? anlycPosId() : void 0;
}
function setShutDownTime(e) {
  65535 < e ||
    (CommandDownlink2(32, 208, 5, intToHex(e)),
    (e = getDownPBytes()),
    void 0,
    startSession(new Uint8Array(e).buffer, onSetShutDownTime, 5));
}
function onSetShutDownTime(e) {
  void 0, 0 === getResult() ? void 0 : void 0;
}
function getShutDownTime() {
  CommandDownlink(32, 224, 5);
  var e = getDownPBytes();
  void 0, startSession(new Uint8Array(e).buffer, onGetShutDownTime, 5);
}
function onGetShutDownTime(e) {
  void 0,
    0 === getResult()
      ? ((e = byteArray2Hex(getUpPBytes(0, upPLength()))), void 0)
      : void 0;
}
function setSleepModeTime(e) {
  if (!(4294967295 < e)) {
    var t = intToHex(e),
      n = new Array(4);
    switch (t.length) {
      case 1:
        (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = t[0]);
        break;
      case 2:
        (n[0] = 0), (n[1] = 0), (n[2] = t[0]), (n[3] = t[1]);
        break;
      case 3:
        (n[0] = 0), (n[1] = t[0]), (n[2] = t[1]), (n[3] = t[2]);
        break;
      case 4:
        n = t;
    }
    CommandDownlink2(34, 112, 5, n);
    e = getDownPBytes();
    void 0, startSession(new Uint8Array(e).buffer, onSetSleepModeTime, 5);
  }
}
function onSetSleepModeTime(e) {
  void 0, 0 === getResult() ? void 0 : void 0;
}
function getSleepModeTime() {
  CommandDownlink(34, 128, 10);
  var e = getDownPBytes();
  void 0, startSession(new Uint8Array(e).buffer, onGetSleepModeTime, 5);
}
function onGetSleepModeTime(e) {
  void 0, 0 === getResult() ? void 0 : void 0;
}
function onSetBuzzerResult(e) {
  void 0,
    0 === getResult()
      ? mListener.onSetBuzzerResult(!0)
      : mListener.onSetBuzzerResult(!1);
}
getPosInfo.prototype.doSetBuzzerOperation = function (e) {
  var t = e + "",
    e =
      (CommandDownlink2(
        23,
        144,
        10,
        hexStr2Bytes((t = 0 <= e && e < 10 ? "00C80" + t : "00C8" + t))
      ),
      getDownPBytes());
  void 0, startSession(new Uint8Array(e).buffer, onSetBuzzerResult, 5);
};
var do_trade_timeout,
  mName,
  keyManager = function (e) {
    writeObj(e), (mListener = e), void 0, writeObj(this);
  },
  isLcdClosed = !1,
  isLcdshowing = !1,
  lcdShowCustomDisplayStr = "",
  LcdModeAlign = {
    LCD_MODE_ALIGNLEFT: 1,
    LCD_MODE_ALIGNRIGHT: 2,
    LCD_MODE_ALIGNCENTER: 3,
  },
  CustomInputOperateType = { isNumber: 1, Other: 2 },
  CustomInputDisplayType = { PlainText: 1, Other: 2 };
function doInputCustomStr(e, t, n, r, o, a) {
  mName = o;
  o = "0000";
  e === CustomInputOperateType.isNumber ? (o += "00") : (o += "01"),
    e === CustomInputDisplayType.PlainText ? (o += "01") : (o += "00");
  CommandDownlink2(
    16,
    192,
    a,
    hexStr2Bytes(
      (o =
        (o = (o += intToHexValue(n)) + intToHexValue(r.length + 1)) + r + "00")
    )
  );
  e = getDownPBytes();
  startSession(new Uint8Array(e).buffer, onReturnDoInputCustomStr, a);
}
function onReturnDoInputCustomStr(e) {
  var t;
  void 0,
    0 === getResult()
      ? ((e = hexStr2Bytes(e.substring(18, e.length - 2))),
        void 0,
        (t = e[2]),
        void 0,
        (t = byteArray2Hex(getBytesFromArr(3, t, e))),
        void 0,
        mListener.onReturnDoInputCustomStr(hex2Ascii(t), mName))
      : mListener.onReturnDoInputCustomStr(null, mName);
}
function lcdShowCustomDisplay(e, t, n) {
  isLcdshowing && lcdShowCloseDisplay(),
    (isLcdClosed = !(isLcdshowing = !0)),
    (do_trade_timeout = n);
  (n = "00"),
    (n =
      e === LcdModeAlign.LCD_MODE_ALIGNLEFT
        ? "00"
        : e === LcdModeAlign.LCD_MODE_ALIGNRIGHT
        ? "20"
        : e === LcdModeAlign.LCD_MODE_ALIGNCENTER
        ? "40"
        : "00"),
    null === e && (n = "80"),
    (e = hexStr2Bytes(
      (lcdShowCustomDisplayStr = null !== t && "" !== t ? n + t + "00" : "")
    )),
    CommandDownlink2(65, 16, do_trade_timeout, e),
    (n = getDownPBytes());
  startSession(
    new Uint8Array(n).buffer,
    onLcdShowCustomDisplay,
    do_trade_timeout
  );
}
function onLcdShowCustomDisplay(e) {
  if (0 === getResult()) {
    for (var t = 0; !isLcdClosed && t < 1e3 * do_trade_timeout; ) sleep(1), t++;
    (isLcdshowing = !1), isLcdClosed || mListener.onLcdShowCustomDisplay(!0);
  } else mListener.onLcdShowCustomDisplay(!1);
}
function lcdShowCloseDisplay() {
  var e;
  isLcdshowing &&
    (CommandDownlink2(65, 16, 1, hexStr2Bytes((lcdShowCustomDisplayStr = ""))),
    (e = getDownPBytes()),
    (isLcdshowing = !(isLcdClosed = !0)),
    startSession(
      new Uint8Array(e).buffer,
      onLcdShowCustomDisplay,
      do_trade_timeout
    ));
}
function setMasterKey(e, t, n, r) {
  10 < n ||
    (CommandDownlink2(16, 226, r, hexStr2Bytes(e + t + "0" + n)),
    (r = getDownPBytes()),
    void 0,
    startSession(new Uint8Array(r).buffer, onSetMasterKeyResult, 5));
}
function onSetMasterKeyResult(e) {
  void 0,
    0 === getResult()
      ? mListener.onReturnSetMasterKeyResult(!0)
      : mListener.onReturnSetMasterKeyResult(!1);
}
function udpateWorkKey(e, t, n, r, o, a, s, i) {
  10 <= s ||
    (CommandDownlink2(
      16,
      240,
      i,
      hexStr2Bytes(setWorkKeyStr(e, t, n, r, o, a, s))
    ),
    (i = getDownPBytes()),
    void 0,
    startSession(new Uint8Array(i).buffer, onUpdateWorkKeyResult, 5));
}
function setWorkKeyStr(e, t, n, r, o, a, s) {
  var i = "",
    u = 0,
    u =
      (isEmpty(e) || isEmpty(t)
        ? (t = e = "")
        : ((u = e.length + t.length), (u /= 2)),
      (i += toHex(u).substr(2, 2) + e + t),
      0),
    e =
      (isEmpty(n) || isEmpty(r)
        ? (r = n = "")
        : ((u = n.length + r.length), (u /= 2)),
      (i += toHex(u).substr(2, 2) + n + r),
      0);
  return (
    isEmpty(o) || isEmpty(a)
      ? (a = o = "")
      : ((e = o.length + a.length), (e /= 2)),
    (i += toHex(e).substr(2, 2) + o + a),
    void 0,
    i + "0" + s
  );
}
function onUpdateWorkKeyResult(e) {
  void 0,
    0 === getResult()
      ? mListener.onRequestUpdateWorkKeyResult(!0)
      : mListener.onRequestUpdateWorkKeyResult(!1);
}
function doUpdateIPEKOperation(e, t, n, r, o, a, s, i, u, l) {
  10 <= e ||
    (CommandDownlink2(
      16,
      242,
      5,
      hexStr2Bytes("00000" + e + t + n + r + o + a + s + i + u + l)
    ),
    (e = getDownPBytes()),
    void 0,
    startSession(new Uint8Array(e).buffer, onUpdateIPEKResult, 5));
}
function onUpdateIPEKResult(e) {
  0 === getResult()
    ? mListener.onReturnUpdateIPEKResult(!0)
    : mListener.onReturnUpdateIPEKResult(!1);
}
(keyManager.prototype.setMasterKey = function (e, t, n, r) {
  setMasterKey(e, t, n, r);
}),
  (keyManager.prototype.udpateWorkKey = function (e, t, n, r, o, a, s, i) {
    udpateWorkKey(e, t, n, r, o, a, s, i);
  }),
  (keyManager.prototype.udpateWorkKey = function (e, t, n, r, o, a, s, i) {
    udpateWorkKey(e, t, n, r, o, a, s, i);
  }),
  (keyManager.prototype.doInputCustomStr = function (e, t, n, r, o, a) {
    doInputCustomStr(e, t, n, r, o, a);
  }),
  (keyManager.prototype.lcdShowCustomDisplay = function (e, t, n) {
    lcdShowCustomDisplay(e, t, n);
  }),
  (keyManager.prototype.lcdShowCloseDisplay = function () {
    lcdShowCloseDisplay();
  }),
  (keyManager.prototype.doUpdateIPEKOperation = function (
    e,
    t,
    n,
    r,
    o,
    a,
    s,
    i,
    u,
    l
  ) {
    doUpdateIPEKOperation(e, t, n, r, o, a, s, i, u, l);
  });
var NfcApdu = function (e) {
  writeObj(e), (mListener = e), void 0, writeObj(this);
};
function onApduResult(e) {
  var t, n, r;
  void 0,
    0 !== getResult() || (e = 0) === (t = getUpPByte(e++))
      ? mListener.onReturnApduResult(!1, null, 0)
      : ((n = getUpPByte(e++)),
        (e = getUpPByte(e++)),
        17 === t && ((n += 255), (e += 255)),
        (r = byteArray2Hex(getUpPBytes(3, e))),
        void 0,
        mListener.onReturnApduResult(!0, r, n));
}
function onReturnPowerOffNFCResult(e) {
  void 0,
    0 === getResult()
      ? mListener.onReturnPowerOffNFCResult(!0)
      : mListener.onReturnPowerOffNFCResult(!1);
}
function onPowerOnNFCResult(e) {
  var t, n, r, o;
  void 0,
    0 !== getResult() || (e = 0) === (t = getUpPByte(e++))
      ? mListener.onReturnPowerOnNFCResult(!1, null, null, 0)
      : ((n = byteArray2Hex(getUpPBytes(1, 10))),
        (e += 10),
        (r = getUpPByte(e++)),
        (o = byteArray2Hex(getUpPBytes(13, (e = getUpPByte(e++))))),
        void 0,
        mListener.onReturnPowerOnNFCResult(!0, n, o, r));
}
(NfcApdu.prototype.sendApduByNFC = function (e, t) {
  (e = hexStr2Bytes(e)),
    void 0,
    CommandDownlink2(23, 16, t, e),
    (t = getDownPBytes());
  void 0, startSession(new Uint8Array(t).buffer, onApduResult, 5);
}),
  (NfcApdu.prototype.powerOffNFC = function (e) {
    CommandDownlink(23, 32, e);
    e = getDownPBytes();
    void 0,
      startSession(new Uint8Array(e).buffer, onReturnPowerOffNFCResult, 5);
  }),
  (NfcApdu.prototype.powerOnNFC = function (e) {
    CommandDownlink2(23, 0, e, hexStr2Bytes("00"));
    e = getDownPBytes();
    void 0, startSession(new Uint8Array(e).buffer, onPowerOnNFCResult, 5);
  });
var TCKEY = [0, 0, 0, 0, 0, 0, 0, 0],
  dataLen = 0,
  HEADER_LEN = 4,
  CRC_LEN = 1,
  OVERHEAD_LEN = 5,
  DATA_FIELD_HEADER_LEN = 5,
  bytes = new Array();
function packet(e) {
  (e = OVERHEAD_LEN + DATA_FIELD_HEADER_LEN + (dataLen = e)),
    ((bytes = new Array(e))[1] = 0);
  e = intToHex(e - 4);
  1 === e.length ? (bytes[2] = e[0]) : ((bytes[1] = e[0]), (bytes[2] = e[1])),
    (bytes[0] = 77);
}
function packet2(e) {
  arrCopyArr(e, 0, (bytes = new Array(e.length)), 0, e.length),
    (dataLen = e.length - (OVERHEAD_LEN + DATA_FIELD_HEADER_LEN)),
    void 0;
}
function setPByte(e, t) {
  bytes[HEADER_LEN + e] = t;
}
function getPByte(e) {
  return e + HEADER_LEN < bytes.length ? bytes[e + HEADER_LEN] : 0;
}
function getPBytes() {
  return bytes;
}
function setCmdID(e) {
  bytes[3] = e;
}
function getCmdID() {
  return bytes[3];
}
function setCmdCode(e) {
  setPByte(0, e);
}
function setCmdSubCode(e) {
  setPByte(1, e);
}
function getCmdCode() {
  return getPByte(0);
}
function getCmdSubCode() {
  return getPByte(1);
}
function getResultCode() {
  return getPByte(2);
}
function setDataField(e) {
  var t = e.length,
    t = (setPByte(3, 0), intToHex(t));
  1 === t.length ? setPByte(4, t[0]) : (setPByte(3, t[0]), setPByte(4, t[1])),
    arrCopyArr(e, 0, bytes, HEADER_LEN + 5, e.length);
}
function getDataFieldByte(e) {
  return e + HEADER_LEN + 5 < bytes.length ? bytes[e + HEADER_LEN + 5] : 0;
}
function setTimeOut(e) {
  setPByte(2, e);
}
function setPCRC(e) {
  bytes[bytes.length - 1] = e;
}
function buildCRC() {
  setPCRC(calPCRC(bytes));
}
function getPCRC() {
  return bytes[bytes.length - 1];
}
function calPCRC(e) {
  for (var t = e[0], n = 1; n < e.length - 1; n++) t ^= e[n];
  return void 0, t;
}
function validPCRC() {
  return calPCRC(bytes) === getPCRC();
}
function isValid() {
  return 77 === bytes[0] && validPCRC();
}
function isPEmpty() {
  return 0 === dataLen;
}
function len() {
  return dataLen;
}
// function setDesKey() {
//   if (8 === KEY.length) arrCopyArr(KEY, 0, TCKEY, 0, 8);
//   else if (16 === KEY.length) {
//     for (var e = new Array(8), t = 0; t < 8; t++)
//       e[t] = byte(KEY[t] ^ KEY[t + 8]);
//     arrCopyArr(e, 0, TCKEY, 0, 8), void 0;
//   } else void 0;
// }
function calMac(e, t) {
  var n = t + 1 + (8 - ((t + 1) % 8)),
    r = new Array(n);
  arrCopyArr(e, 0, r, 0, t);
  for (var o = t; o < n; o++) r[o] = 0;
  for (var a = [0, 0, 0, 0, 0, 0, 0, 0], o = 0; o < n; o++)
    a[o % 8] = a[o % 8] ^ r[o];
  void 0;
  new Array();
  return void 0, a;
}
var pinOperation = function (e) {
  writeObj(e), (mListener = e), void 0, writeObj(this);
};
function setInputCsutomStr(e, t, n, r, o) {
  doGetPin(e, t, n, r, "", "", 0, o);
}
function getPin(e, t, n, r, o, a, s) {
  doGetPin(e, t, n, r, o, a, 0, s);
}
function doGetPin(e, t, n, r, o, a, s, i) {
  var u = "0000";
  (u +=
    byteArray2Hex(intToHex(e)) +
    byteArray2Hex(intToHex(t)) +
    byteArray2Hex(intToHex(n))),
    isEmpty(r)
      ? ((r = ""), (u += byteArray2Hex(intToHex(0)) + r))
      : (u +=
          byteArray2Hex(intToHex(getUTF8Bytes(r).length + 1)) +
          byteArray2Hex(toGbkBytes(r)) +
          "00"),
    isEmpty(r)
      ? ((o = ""), (u += byteArray2Hex(intToHex(0)) + o))
      : (u +=
          byteArray2Hex(intToHex(o.length)) + byteArray2Hex(getUTF8Bytes(o)));
  isEmpty(r)
    ? ((a = ""), (u += byteArray2Hex(intToHex(0)) + a))
    : (u += byteArray2Hex(intToHex(a.length / 2)) + a);
  CommandDownlink2(16, 113, i, hexStr2Bytes((u += byteArray2Hex(intToHex(s)))));
  e = getDownPBytes();
  void 0, startSession(new Uint8Array(e).buffer, onReturnGetPinResult, 5);
}
function onReturnGetPinResult(e) {
  var t, n, r, o;
  void 0,
    0 === getResult()
      ? ((e = new Array()),
        upPLength(),
        void 0,
        byteArray2Hex(getUpPBytes((t = 2), 2)),
        (t += 2),
        (n = byteArray2Hex(getUpPBytes(5, (r = getUpPByte(t++))))),
        (t += r),
        (r = getUpPByte(t++)),
        (o = byteArray2Hex(getUpPBytes(t, r))),
        (t += r),
        e.push(n),
        e.push(o),
        mListener.onReturnGetPinResult(e),
        void 0)
      : (mListener.onReturnGetPinResult(null), void 0);
}
function pinKey_TDES(e, t, n, r) {
  var o;
  isEmpty(t)
    ? void 0
    : ((o = "0000"),
      (o = (o += byteArray2Hex(intToHex(e)) + t) + byteArray2Hex(intToHex(r))),
      CommandDownlink2(17, 32, n, hexStr2Bytes(o)),
      (e = getDownPBytes()),
      void 0,
      startSession(new Uint8Array(e).buffer, onPinKey_TDES_Result, 5));
}
function onPinKey_TDES_Result(e) {
  void 0, 0 === getResult() ? (byteArray2Hex(getAllBytes()), void 0) : void 0;
}
pinOperation.prototype.setInputCsutomStr = function (e, t, n, r) {
  setInputCsutomStr("0", e, t, n, r);
};
var READ_BUF_MAX_SIZE = 10240,
  dataBuffer = new ArrayBuffer(READ_BUF_MAX_SIZE),
  dataView = new DataView(dataBuffer),
  read_offset = 0;
function clearReadbuffer() {
  for (var e = 0; e < read_offset; e++) dataView.setUint8(e, 0);
  read_offset = 0;
}
function appendData(e) {
  for (var t = e, n = 0; n < t.byteLength; n++)
    dataView.setUint8(read_offset, t.getUint8(n)), read_offset++;
}
function readBufferData() {
  var e = new ArrayBuffer(read_offset),
    t = new DataView(e);
  return void 0, copyArr(dataBuffer, 0, e, 0, read_offset), t;
}
function isCompleteInstruction() {
  var e,
    t,
    n = !1;
  return (
    77 === dataView.getUint8(0) &&
      ((e = dataView.getUint8(1)),
      (t = dataView.getUint8(2)),
      ((e - (e % 16)) / 16) * Math.pow(16, 3) +
        (e % 16) * Math.pow(16, 2) +
        t +
        4 <=
        read_offset && (n = !0)),
    n
  );
}

function byte(/*long*/ long) {
  // we want to represent the input as a 8-bytes array
  var byteArray = [0, 0, 0, 0, 0, 0, 0, 0];

  for (var index = 0; index < byteArray.length; index++) {
    var byte = long & 0xff;
    byteArray[index] = byte;
    long = (long - byte) / 256;
  }

  return byteArray;
}
export function QPOSAnalyResult(e) {
  writeObj(e), (mListener = e), void 0, writeObj(this);
}
function onAnalyQposInfoResult(e) {
  void 0,
    0 === getResult()
      ? ((e = anlycPosInfo()), writeObj(this), mListener.onQposInfoResult(e))
      : void 0;
}
function onAnalyQposIdResult(e) {
  void 0,
    0 === getResult()
      ? ((e = anlycPosId()), mListener.onQposIdResult(e))
      : void 0;
}
(QPOSAnalyResult.prototype.getQPosId = function () {
  CommandDownlink(16, 0, 5);
  var e = getDownPBytes();
  startSession(new Uint8Array(e).buffer, onAnalyQposIdResult, 5);
}),
  (QPOSAnalyResult.prototype.getQPosInfo = function () {
    CommandDownlink(17, 48, 5);
    var e = getDownPBytes();
    startSession(new Uint8Array(e).buffer, onAnalyQposInfoResult, 5);
  }),
  (QPOSAnalyResult.prototype.checkCmdId = function () {
    return checkCmdId();
  });
var Display = {
  TRY_ANOTHER_INTERFACE: "TRY_ANOTHER_INTERFACE",
  PLEASE_WAIT: "PLEASE_WAIT",
  REMOVE_CARD: "REMOVE_CARD",
  CLEAR_DISPLAY_MSG: "CLEAR_DISPLAY_MSG",
  PROCESSING: "PROCESSING",
  PIN_OK: "PIN_OK",
  TRANSACTION_TERMINATED: "TRANSACTION_TERMINATED",
  INPUT_PIN_ING: "INPUT_PIN_ING",
  MAG_TO_ICC_TRADE: "MAG_TO_ICC_TRADE",
  INPUT_OFFLINE_PIN_ONLY: "INPUT_OFFLINE_PIN_ONLY",
  CARD_REMOVED: "CARD_REMOVED",
  INPUT_LAST_OFFLINE_PIN: "INPUT_LAST_OFFLINE_PIN",
  MSR_DATA_READY: "MSR_DATA_READY",
};
function checkCmdId() {
  var e = !1,
    t = commandID();
  return (
    void 0,
    t === CmdId.CMDID_COMPLETED || t === CmdId.CMDID_COMPLETED_ENCRY
      ? (e = !0)
      : t === CmdId.CMDID_INPUT_PIN_ING
      ? ((e = !0),
        !(0 < upPLength()) || 0 === getUpPByte(0)
          ? mListener.onRequestDisplay(Display.INPUT_PIN_ING)
          : mListener.onRequestDisplay(Display.INPUT_OFFLINE_PIN_ONLY))
      : t === CmdId.CMDID_MAG_TO_ICC_TRADE
      ? ((e = !0), mListener.onRequestDisplay(Display.MAG_TO_ICC_TRADE))
      : t === CmdId.CMDID_SEND_IC_CARDNO ||
        t === CmdId.CMDID_EMV_KERNEL_PC ||
        t === CmdId.CMDID_CHECK_HAVE_CARD
      ? (e = !0)
      : t === CmdId.CMDID_MSR_DATA_READY
      ? ((e = !0), mListener.onRequestDisplay(Display.MSR_DATA_READY))
      : ((e = !1),
        void 0,
        t === CmdId.CMDID_DESTRUCT
          ? mListener.onRequestTransactionResult(TransactionResult.DEVICE_ERROR)
          : t === CmdId.CMDID_TIMEOUT
          ? mListener.onError(POSError.CMD_TIMEOUT)
          : t === CmdId.CMDID_CARD_REMOVED
          ? mListener.onRequestDisplay(Display.CARD_REMOVED)
          : t === CmdId.CMDID_USERCANCEL
          ? (mListener.onRequestDisplay(Display.TRANSACTION_TERMINATED),
            mListener.onRequestTransactionResult(TransactionResult.CANCEL))
          : t === CmdId.CMDID_MACERROR
          ? mListener.onError(POSError.MAC_ERROR)
          : t === CmdId.CMDID_EMV_TRANS_DENIAL
          ? (mListener.onEmvICCExceptionData(
              byteArray2Hex(getUpPBytes(0, upPLength()))
            ),
            mListener.onRequestTransactionResult(TransactionResult.DECLINED))
          : t === CmdId.CMDID_EMV_TRANS_TERMINATE
          ? (mListener.onRequestDisplay(Display.TRANSACTION_TERMINATED),
            mListener.onEmvICCExceptionData(
              byteArray2Hex(getUpPBytes(0, upPLength()))
            ),
            mListener.onRequestTransactionResult(TransactionResult.TERMINATED))
          : t === CmdId.CMDID_EMV_TRANS_TERMINATE_NFC
          ? mListener.onRequestTransactionResult(
              TransactionResult.NFC_TERMINATED
            )
          : t === CmdId.CMDID_NOT_AVAILABLE || t === CmdId.CMDID_OLD
          ? mListener.onError(POSError.CMD_NOT_AVAILABLE)
          : t === CmdId.CMDID_RESET
          ? ((e = !0), mListener.onError(POSError.DEVICE_RESET))
          : t === CmdId.CMDID_ICC_POWER_ON_ERROR
          ? (void 0, mListener.onDoTradeResult(DoTradeResult.NOT_ICC, null))
          : t === CmdId.CMDID_WR_DATA_ERROR
          ? mListener.onError(POSError.WR_DATA_ERROR)
          : t === CmdId.CMDID_EMV_APP_CFG_ERROR
          ? mListener.onError(POSError.EMV_APP_CFG_ERROR)
          : t === CmdId.CMDID_EMV_CAPK_CFG_ERROR
          ? mListener.onError(POSError.EMV_CAPK_CFG_ERROR)
          : t === CmdId.CMDID_NO_UPDATE_WORK_KEY
          ? mListener.onDoTradeResult(DoTradeResult.NO_UPDATE_WORK_KEY, null)
          : t === CmdId.CMDID_EMV_TRANS_CARD_BLOCKED_OR_EMV_APPS
          ? mListener.onRequestTransactionResult(
              TransactionResult.CARD_BLOCKED_OR_NO_EMV_APPS
            )
          : t === CmdId.CMDID_EMV_TRANS_SELECT_APP_FAILED
          ? mListener.onRequestTransactionResult(
              TransactionResult.SELECT_APP_FAIL
            )
          : t === CmdId.CMDID_EMV_TRANS_CAPK_FAILED
          ? mListener.onRequestTransactionResult(TransactionResult.CAPK_FAIL)
          : t === CmdId.CMDID_EMV_TRANS_FALLBACK
          ? mListener.onRequestTransactionResult(TransactionResult.FALLBACK)
          : (t === CmdId.CMDID_ICC_INIT_ERROR
              ? void 0
              : t === CmdId.CMDID_ICC_TRADE_ERROR
              ? void 0
              : void 0,
            mListener.onError(POSError.UNKNOWN))),
    void 0,
    e
  );
}
var connectionId,
  POSError = {
    TIMEOUT: "TIMEOUT",
    MAC_ERROR: "MAC_ERROR",
    CMD_TIMEOUT: "CMD_TIMEOUT",
    CMD_NOT_AVAILABLE: "CMD_NOT_AVAILABLE",
    DEVICE_RESET: "DEVICE_RESET",
    UNKNOWN: "UNKNOWN",
    DEVICE_BUSY: "DEVICE_BUSY",
    INPUT_OUT_OF_RANGE: "INPUT_OUT_OF_RANGE",
    INPUT_INVALID_FORMAT: "INPUT_INVALID_FORMAT",
    INPUT_ZERO_VALUES: "INPUT_ZERO_VALUES",
    INPUT_INVALID: "INPUT_INVALID",
    CASHBACK_NOT_SUPPORTED: "CASHBACK_NOT_SUPPORTED",
    CRC_ERROR: "CRC_ERROR",
    COMM_ERROR: "COMM_ERROR",
    WR_DATA_ERROR: "WR_DATA_ERROR",
    EMV_APP_CFG_ERROR: "EMV_APP_CFG_ERROR",
    EMV_CAPK_CFG_ERROR: "EMV_CAPK_CFG_ERROR",
    APDU_ERROR: "APDU_ERROR",
    APP_SELECT_TIMEOUT: "APP_SELECT_TIMEOUT",
    ICC_ONLINE_TIMEOUT: "ICC_ONLINE_TIMEOUT",
    AMOUNT_OUT_OF_LIMIT: "AMOUNT_OUT_OF_LIMIT",
  },
  DoTradeResult = {
    NONE: "NONE",
    MCR: "MCR",
    ICC: "ICC",
    NOT_ICC: "NOT_ICC",
    BAD_SWIPE: "BAD_SWIPE",
    NO_RESPONSE: "NO_RESPONSE",
    NO_UPDATE_WORK_KEY: "NO_UPDATE_WORK_KEY",
    NFC_ONLINE: "NFC_ONLINE",
    NFC_OFFLINE: "NFC_OFFLINE",
    NFC_DECLINED: "NFC_DECLINED",
    TRY_ANOTHER_INTERFACE: "TRY_ANOTHER_INTERFACE",
  };
export function QPOSService(e) {
  this.mOnResult,
    void 0,
    this.mDoTrade,
    this.mWebBluetooth,
    this.mEMVManager,
    this.writeChar,
    this.mKeyManager,
    this.mUpdateFirmware,
    this.mGtMifareCardInfo,
    this.mpinOperation,
    this.mNfcApdu,
    this.mgetPosInfo;
}
var SerialManager = (QPOSService.prototype.initListener = function (e) {
  (this.mOnResult = new QPOSAnalyResult(e)),
    (this.mDoTrade = new DoTrade(e)),
    (this.mWebBluetooth = new webBluetooth(this.mOnResult, this.writeChar)),
    (this.mEMVManager = new EMVManager(e)),
    (this.mKeyManager = new keyManager(e)),
    (this.mUpdateFirmware = new UpdateFirmwareManager(e)),
    (this.mGtMifareCardInfo = new GetMifareCardInfo(e)),
    (this.mpinOperation = new pinOperation(e)),
    (this.mNfcApdu = new NfcApdu(e)),
    (this.mgetPosInfo = new getPosInfo(e));
});

(QPOSService.prototype.getQPosInfo = function () {
  this.mOnResult.getQPosInfo();
}),
  (QPOSService.prototype.getQPosId = function () {
    this.mOnResult.getQPosId();
  }),
  (QPOSService.prototype.doTrade = function (e, t) {
    void 0, this.mDoTrade.doTrade(e, t);
  }),
  (QPOSService.prototype.sendPin = function (e) {
    void 0, this.mDoTrade.sendPin(e);
  }),
  (QPOSService.prototype.doCheckCard = function (e, t) {
    this.mDoTrade.doCheckCard(e, t);
  }),
  (QPOSService.prototype.selectEmvApp = function (e) {
    this.mDoTrade.selectEmvApp(e);
  }),
  (QPOSService.prototype.sendOnlineProcessResult = function (e) {
    this.mDoTrade.sendOnlineProcessResult(e);
  }),
  (QPOSService.prototype.getNFCBatchData = function (e, t) {
    return this.mDoTrade.getNFCBatchData(e, t);
  }),
  (QPOSService.prototype.resetPosStatus = function () {
    resetQPosStatus();
  }),
  (QPOSService.prototype.updateEmvAPP = function (e, t) {
    this.mEMVManager.updateEmvAPP(e, t);
  }),
  (QPOSService.prototype.updateEmvCAPK = function (e, t) {
    this.mEMVManager.updateEmvCAPK(e, t);
  }),
  (QPOSService.prototype.updateEmvConfig = function (e, t) {
    this.mEMVManager.updateEmvConfig(e, t);
  }),
  (QPOSService.prototype.updateEMVConfigByXml = function (e) {
    void 0, this.mEMVManager.updateEMVConfigByXml(e);
  }),
  (QPOSService.prototype.getICCTag = function (e, t, n, r, o) {
    return this.mDoTrade.getICCTag(e, t, n, r, o);
  }),
  (QPOSService.prototype.getNewICCTag = function (e, t, n, r, o) {
    return this.mDoTrade.getNewICCTag(e, t, n, r, o);
  }),
  (QPOSService.prototype.setMasterKey = function (e, t, n, r) {
    this.mKeyManager.setMasterKey(e, t, n, r);
  }),
  (QPOSService.prototype.udpateWorkKey = function (e, t, n, r, o, a, s, i) {
    this.mKeyManager.udpateWorkKey(e, t, n, r, o, a, s, i);
  }),
  (QPOSService.prototype.doUpdateIPEKOperation = function (
    e,
    t,
    n,
    r,
    o,
    a,
    s,
    i,
    u,
    l
  ) {
    this.mKeyManager.doUpdateIPEKOperation(e, t, n, r, o, a, s, i, u, l);
  }),
  (QPOSService.prototype.lcdShowCustomDisplay = function (e, t, n) {
    this.mKeyManager.lcdShowCustomDisplay(e, t, n);
  }),
  (QPOSService.prototype.lcdShowCloseDisplay = function () {
    this.mKeyManager.lcdShowCloseDisplay();
  }),
  (QPOSService.prototype.doInputCustomStr = function (e, t, n, r, o, a) {
    this.mKeyManager.doInputCustomStr(e, t, n, r, o, a);
  }),
  (QPOSService.prototype.pollOnMifareCard = function (e) {
    this.mGtMifareCardInfo.pollOnMifareCard(e);
  }),
  (QPOSService.prototype.finishMifareCard = function (e) {
    this.mGtMifareCardInfo.finishMifareCard(e);
  }),
  (QPOSService.prototype.setInputCsutomStr = function (e, t, n, r) {
    this.mpinOperation.setInputCsutomStr(e, t, n, r);
  }),
  (QPOSService.prototype.updatePosFirmware = function (e) {
    this.mUpdateFirmware.updatePosFirmware(e);
  }),
  (QPOSService.prototype.sendApduByNFC = function (e, t) {
    this.mNfcApdu.sendApduByNFC(e, t);
  }),
  (QPOSService.prototype.powerOnNFC = function (e) {
    this.mNfcApdu.powerOnNFC(e);
  }),
  (QPOSService.prototype.powerOffNFC = function (e) {
    this.mNfcApdu.powerOffNFC(e);
  }),
  (QPOSService.prototype.setCommunicationMode = function (e) {
    (myConnectType = e), void 0;
  }),
  (QPOSService.prototype.doSetBuzzerOperation = function (e) {
    this.mgetPosInfo.doSetBuzzerOperation(e);
  }),
  function (e) {
    writeObj(e), (mOnResult = e), void 0, writeObj(mOnResult);
  };
var onConnect = function (e) {
  void 0 !== e &&
    (chrome.serial.onReceive.addListener(onReceiveCallbackSerial),
    (connectionId = e.connectionId));
};
var onReceiveCallbackSerial = function (e) {
  void 0, setNotifyReceiveData(!0);
  (e = e.data), (e = new DataView(e));
  printDataView(e), appendData(e);
};
function connectToDeviceSerial(e) {
  chrome.serial.connect(e, { bitrate: 9600 }, onConnect);
}
function disconnectToDevice(e) {
  chrome.serial.disconnect(connectionId, e);
}
function basicWriteSerial(e) {
  chrome.serial.send(connectionId, e, console.log.bind(console));
}
function writePromiseSerial(e) {
  setNotifyReceiveData(!1);
  void 0, clearReadbuffer(), basicWriteSerial(e), void 0;
}
SerialManager.prototype.startSessionSerial = function (e, t, n) {
  startSessionSerial(e, t, n);
};
var bufData = "",
  bufLen = 0,
  result = null;
function startSessionSerial(e, t, n) {
  (n *= 100),
    (result = null),
    writePromiseSerial(e),
    void 0,
    readSerialDataBuffer(t, n, function e() {
      readSerialDataBuffer(t, --n, e);
    });
}
function readSerialDataBuffer(n, r, o) {
  setTimeout(function () {
    if (r <= 0) return initPartBuffer(), void void 0;
    if (getNotifyReceiveData()) {
      var e,
        t = readBufferData();
      if (null === t) return initPartBuffer(), void void 0;
      printDataView(t),
        isCompleteInstruction()
          ? "24" !== (t = dataView2Hex(t)).substring(6, 8)
            ? "36" === t.substring(6, 8)
              ? ((bufLen = parseInt(t.substring(14, 18), 16)),
                (bufData += t.substring(18, 18 + 2 * bufLen)),
                void 0,
                startSession(packageInstructionPart(), n, 90))
              : "23" === t.substring(6, 8) ||
                "41" === t.substring(6, 8) ||
                "43" === t.substring(6, 8) ||
                "42" === t.substring(6, 8) ||
                "52" === t.substring(6, 8)
              ? (startSession(packageInstructionQue(), n, 90), void 0)
              : (packet2(hexStr2Bytes(t)), mOnResult.checkCmdId())
            : (void 0,
              0 !== bufLen
                ? ((e = parseInt(t.substring(14, 18), 16)),
                  (e =
                    t.substring(8, 18) + bufData + t.substring(18, 18 + 2 * e)),
                  void 0,
                  packageCommandUplink(e))
                : (void 0, packet2(hexStr2Bytes(t))),
              void 0,
              initPartBuffer(),
              validPCRC() &&
                mOnResult.checkCmdId() &&
                (null !== n
                  ? n(byteArray2Hex(getAllBytes()))
                  : (result = byteArray2Hex(getAllBytes()))))
          : (void 0, o());
    } else o();
  }, 10);
}
function startSysSessionSerial(e, r, o) {
  return new Promise(function (t, n) {
    (result = null),
      writePromiseSerial(e),
      (o *= 100),
      void 0,
      readSysSerialDataBuffer(
        r,
        o,
        function e() {
          readSysSerialDataBuffer(r, --o, e, t, n);
        },
        t,
        n
      );
  });
}
function readSysSerialDataBuffer(s, e, i, u, l) {
  setTimeout(function () {
    if (t <= 0) return initPartBuffer(), void l("time out");
    if (getNotifyReceiveData()) {
      var e = readBufferData();
      if (null === e) return initPartBuffer(), void l("onError(Error.UNKNOWN)");
      if ((printDataView(e), isCompleteInstruction() && !mUpdateFlag)) {
        var t,
          n,
          r = dataView2Hex(e);
        "24" !== r.substring(6, 8)
          ? "36" === r.substring(6, 8)
            ? ((n = function e() {
                readSysSerialDataBuffer(s, --t, e, u, l);
              }),
              (bufLen = parseInt(r.substring(14, 18), 16)),
              (bufData += r.substring(18, 18 + 2 * bufLen)),
              void 0,
              (result = null),
              writePromiseSerial(packageInstructionPart()),
              (t = 500),
              void 0,
              readSysSerialDataBuffer(s, t, n, u, l))
            : "23" === r.substring(6, 8) ||
              "41" === r.substring(6, 8) ||
              "43" === r.substring(6, 8) ||
              "42" === r.substring(6, 8) ||
              "52" === r.substring(6, 8)
            ? ((n = function e() {
                readSysSerialDataBuffer(s, --t, e, u, l);
              }),
              (result = null),
              writePromiseSerial(packageInstructionQue()),
              (t = 500),
              void 0,
              readSysSerialDataBuffer(s, t, n, u, l),
              void 0)
            : (packet2(hexStr2Bytes(r)), mOnResult.checkCmdId())
          : (void 0,
            0 !== bufLen
              ? ((n = parseInt(r.substring(14, 18), 16)),
                (n =
                  r.substring(8, 18) + bufData + r.substring(18, 18 + 2 * n)),
                void 0,
                packageCommandUplink(n))
              : (void 0, packet2(hexStr2Bytes(r))),
            void 0,
            initPartBuffer(),
            validPCRC() &&
              (mOnResult.checkCmdId()
                ? null !== s
                  ? (void 0, s(byteArray2Hex(getAllBytes())))
                  : (void 0, (result = byteArray2Hex(getAllBytes())), u(result))
                : l("data verify error")));
      } else if (mUpdateFlag) {
        for (var o = new Array(e.byteLength), a = 0; a < e.byteLength; a++)
          o[a] = e.getUint8(a);
        e.getUint8(11) === calPCRC(o) && (null !== s ? s(r) : u((result = r)));
      } else void 0, i();
    } else i();
  }, 10);
}
SerialManager.prototype.startSysSessionSerial = function (e, t, n) {
  return startSysSessionSerial(e, t, n);
};
var mListener,
  UpdateFirmwareManager = function (e) {
    writeObj(e), (mListener = e), void 0, writeObj(this);
  };
function updatePosFirmware(a) {
  CommandDownlink(17, 48, 5);
  var e = getDownPBytes();
  void 0,
    startSysSession(new Uint8Array(e).buffer, null, 5).then(
      function (e) {
        var t, n, r, o;
        0 === getResult() &&
          ((t = 0),
          hex2Ascii(byteArray2Hex(getUpPBytes(1, (r = getUpPByte(t++))))),
          (t += r),
          (r = getUpPByte(t++)),
          hex2Ascii(byteArray2Hex(getUpPBytes(t, r))),
          (t += r),
          (r = getUpPByte(t++)),
          hex2Ascii(byteArray2Hex(getUpPBytes(t, r))),
          (t += r),
          (r = getUpPByte(t++)),
          void 0,
          byteArrayToInt(getUpPBytes(t, r)),
          (t += r),
          (r = getUpPByte(t++)),
          (n =
            "00" === (n = byteArray2Hex(getUpPBytes(t, r))) ? "false" : "true"),
          (t += r),
          (r = getUpPByte(t++)),
          (o =
            "00" === (o = byteArray2Hex(getUpPBytes(t, r))) ? "false" : "true"),
          (t += r),
          (0 !== n.search("true") && 0 !== o.search("true")) ||
            (void 0, setUpdateData(a), void 0, startUpdateFirmware()));
      },
      function (e) {
        void 0, setUpdateData(a), startUpdateFirmware();
      }
    );
}
UpdateFirmwareManager.prototype.updatePosFirmware = function (e) {
  updatePosFirmware(e);
};
var upgPack_totalLen,
  g_UpgPackDataLen = 0,
  g_UpgPackData = new Array(),
  g_UpgPackDataIndex = 0;
function setUpdateData(e) {
  var e = hexStr2Bytes(e),
    t = e.length - 32;
  arrCopyArr(e, 32, (g_UpgPackData = new Array(t)), 0, t),
    (g_UpgPackDataLen = upgPack_totalLen = t),
    void 0,
    (g_UpgPackDataIndex = 0);
}
function startUpdateFirmware() {
  if (0 === g_UpgPackDataLen) void 0;
  else {
    void 0;
    var e = g_UpgPackData[g_UpgPackDataIndex],
      t = new Array(2),
      t =
        ((t[0] = g_UpgPackData[g_UpgPackDataIndex + 1]),
        (t[1] = g_UpgPackData[g_UpgPackDataIndex + 2]),
        byteArrayToInt(t)),
      n = new Array(t);
    switch (
      (arrCopyArr(g_UpgPackData, g_UpgPackDataIndex + 3, n, 0, t),
      void 0,
      (g_UpgPackDataIndex += t + 3),
      (g_UpgPackDataLen -= t + 3),
      void 0,
      e)
    ) {
      case 2:
        doWorkbyT0x02(n);
        break;
      case 3:
        doWorkbyT0x03();
        break;
      case 4:
        doWorkbyT0x04();
        break;
      case 17:
        void 0,
          setTimeout(function () {
            void 0,
              writePromise(new Uint8Array(n).buffer),
              startUpdateFirmware();
          }, 100);
        break;
      case 18:
        doWorkbyT0x12(n);
    }
  }
}
function doWorkbyT0x02(e) {
  e = byteArrayToInt(e);
  (e *= 2),
    void 0,
    setTimeout(function () {
      void 0, startUpdateFirmware();
    }, 1e3 * e);
}
var conCou = 0;
function doWorkbyT0x03() {
  void 0,
    openAndConnectDevice().then(
      function (e) {
        void 0, startUpdateFirmware();
      },
      function (e) {
        void 0,
          void 0,
          ++conCou < 3 &&
            setTimeout(function () {
              doWorkbyT0x03();
            }, 500);
      }
    );
}
function doWorkbyT0x04() {
  void 0,
    closeAndConnectDevice(function () {
      startUpdateFirmware();
    });
}
function doWorkbyT0x11(e) {
  setUpdate(!0),
    startSysSession(new Uint8Array(e).buffer, null, 5).then(
      function (e) {
        e = hexStr2Bytes(e);
        if (0 === e.length || 0 !== e[6]) return void 0, void setUpdate(!1);
        setUpdate(!1), startUpdateFirmware();
      },
      function (e) {
        setUpdate(!1), void 0, void 0, startUpdateFirmware();
      }
    );
}
function doWorkbyT0x12(e) {
  startSysSession(new Uint8Array(e).buffer, null, 5).then(
    function (e) {
      0 === getResult() &&
        (commandID() === CmdId.CMDID_CRCERROR && void 0, startUpdateFirmware());
    },
    function (e) {
      void 0, void 0;
    }
  );
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function _createClass(e, t, n) {
  return (
    t && _defineProperties(e.prototype, t),
    n && _defineProperties(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var mDevice,
  controlInterface,
  mDataInterface,
  mConfiguration,
  mControlEndpoint,
  mReadEndpoint,
  mWriteEndpoint,
  UsbManager = _createClass(function e(t) {
    _classCallCheck(this, e),
      writeObj(t),
      (mOnResult = t),
      void 0,
      writeObj(mOnResult);
  }),
  onReceiveCallbackUSB =
    ((UsbManager.prototype.startSessionUSB = function (e, t, n) {
      startSessionUSB(e, t, n);
    }),
    function (e) {
      void 0, setNotifyReceiveData(!0);
      printDataView(e), appendData(e);
    });
export function connectToDeviceUSB() {
  navigator.usb
    .requestDevice({ filters: [{ vendorId: 938 }] })
    .then(function (e) {
      (mDevice = e),
        // (button.innerHTML = "Disconnect"),
        void 0,
        void 0,
        OpenDevice(e);
    })
    .catch(function (e) {
      void 0;
    });
}
export function disconnectToDeviceUSB(e) {
  null !== mDevice && (void 0, mDevice.close());
}
function OpenDevice(t) {
  t.open()
    .then(function () {
      return (
        (mConfiguration = t.configuration),
        void 0,
        null === t.configuration
          ? (void 0, t.selectConfiguration(1))
          : t.claimInterface(0)
      );
    })
    .then(function () {
      void 0,
        (controlInterface = mConfiguration.interfaces[0]),
        (mControlEndpoint = controlInterface.alternates[0].endpoints[0]),
        (mDataInterface = t.configuration.interfaces[0]),
        void 0;
      var e = mDataInterface.alternates[0].endpoints[1];
      "out" === e.direction && "bulk" === e.type
        ? ((mWriteEndpoint = e),
          (mReadEndpoint = mDataInterface.alternates[0].endpoints[0]))
        : "in" === e.direction &&
          "bulk" === e.type &&
          ((mReadEndpoint = e),
          (mWriteEndpoint = mDataInterface.alternates[0].endpoints[0])),
        void 0;
    });
}
// notifyReceiveData = !1;
// function setNotifyReceiveData(e) {
//   notifyReceiveData = e;
// }
// function getNotifyReceiveData() {
//   return notifyReceiveData;
// }
// mUpdateFlag = !1;
// function setUpdate(e) {
//   mUpdateFlag = e;
// }
// function packageInstructionQue() {
//   CommandDownlink4(CmdId.CMDID_QUERY, 0, 0, 90);
//   var e = getDownPBytes();
//   return void 0, new Uint8Array(e).buffer;
// }
// function packageInstructionPart() {
//   CommandDownlink4(CmdId.CMDID_PART_DATA, 0, 0, 90);
//   var e = getDownPBytes();
//   return void 0, new Uint8Array(e).buffer;
// }
// function packageInstructionReset() {
//   CommandDownlink4(CmdId.CMDID_RESET, 0, 0, 15);
//   var e = getDownPBytes();
//   return void 0, new Uint8Array(e).buffer;
// }
function basicWriteUSB(e) {
  void 0,
    mDevice.transferOut(mWriteEndpoint.endpointNumber, e).then(
      function (e) {
        void 0;
      },
      function (e) {
        void 0;
      }
    ),
    void 0,
    mDevice.transferIn(mReadEndpoint.endpointNumber, 1024).then(function (e) {
      void 0,
        void 0,
        e.data && "ok" === e.status && (void 0, onReceiveCallbackUSB(e.data)),
        "stall" === e.status && (void 0, mDevice.clearHalt(1));
    });
}
function writePromiseUSB(e) {
  setNotifyReceiveData(!1);
  void 0, clearReadbuffer(), basicWriteUSB(e), void 0;
}
(bufData = ""), (bufLen = 0), (result = null);
function startSessionUSB(e, t, n) {
  (n *= 100),
    (result = null),
    writePromiseUSB(e),
    void 0,
    readUSBDataBuffer(t, n, function e() {
      readUSBDataBuffer(t, --n, e);
    });
}
function readUSBDataBuffer(n, r, o) {
  setTimeout(function () {
    if (r <= 0) return initPartBuffer(), void void 0;
    if (getNotifyReceiveData()) {
      var e,
        t = readBufferData();
      if (null === t) return initPartBuffer(), void void 0;
      printDataView(t),
        isCompleteInstruction()
          ? "24" !== (t = dataView2Hex(t)).substring(6, 8)
            ? "36" === t.substring(6, 8)
              ? ((bufLen = parseInt(t.substring(14, 18), 16)),
                (bufData += t.substring(18, 18 + 2 * bufLen)),
                void 0,
                startSessionUSB(packageInstructionPart(), n, 90))
              : "23" === t.substring(6, 8) ||
                "41" === t.substring(6, 8) ||
                "43" === t.substring(6, 8) ||
                "42" === t.substring(6, 8) ||
                "52" === t.substring(6, 8)
              ? (startSessionUSB(packageInstructionQue(), n, 90), void 0)
              : packet2(hexStr2Bytes(t))
            : (void 0,
              0 !== bufLen
                ? ((e = parseInt(t.substring(14, 18), 16)),
                  (e =
                    t.substring(8, 18) + bufData + t.substring(18, 18 + 2 * e)),
                  void 0,
                  packageCommandUplink(e))
                : (void 0, packet2(hexStr2Bytes(t))),
              void 0,
              initPartBuffer(),
              validPCRC() &&
                mOnResult.checkCmdId() &&
                (null !== n
                  ? n(byteArray2Hex(getAllBytes()))
                  : (result = byteArray2Hex(getAllBytes()))))
          : (void 0, o());
    } else o();
  }, 10);
}
// function initPartBuffer() {
//   (bufData = ""), (bufLen = 0);
// }
function startSysSessionUSB(e, r, o) {
  return new Promise(function (t, n) {
    (result = null),
      writePromiseUSB(e),
      (o *= 100),
      void 0,
      readSysUSBDataBuffer(
        r,
        o,
        function e() {
          readSysUSBDataBuffer(r, --o, e, t, n);
        },
        t,
        n
      );
  });
}
function readSysUSBDataBuffer(s, e, i, u, l) {
  setTimeout(function () {
    if (t <= 0) return initPartBuffer(), void l("time out");
    if (getNotifyReceiveData()) {
      var e = readBufferData();
      if (null === e) return initPartBuffer(), void l("onError(Error.UNKNOWN)");
      if ((printDataView(e), isCompleteInstruction() && !mUpdateFlag)) {
        var t,
          n,
          r = dataView2Hex(e);
        "24" !== r.substring(6, 8)
          ? "36" === r.substring(6, 8)
            ? ((n = function e() {
                readSysUSBDataBuffer(s, --t, e, u, l);
              }),
              (bufLen = parseInt(r.substring(14, 18), 16)),
              (bufData += r.substring(18, 18 + 2 * bufLen)),
              void 0,
              (result = null),
              writePromiseUSB(packageInstructionPart()),
              (t = 500),
              void 0,
              readSysUSBDataBuffer(s, t, n, u, l))
            : "23" === r.substring(6, 8) ||
              "41" === r.substring(6, 8) ||
              "43" === r.substring(6, 8) ||
              "42" === r.substring(6, 8) ||
              "52" === r.substring(6, 8)
            ? ((n = function e() {
                readSysUSBDataBuffer(s, --t, e, u, l);
              }),
              (result = null),
              writePromiseUSB(packageInstructionQue()),
              (t = 500),
              void 0,
              readSysUSBDataBuffer(s, t, n, u, l),
              void 0)
            : (packet2(hexStr2Bytes(r)), mOnResult.checkCmdId())
          : (void 0,
            0 !== bufLen
              ? ((n = parseInt(r.substring(14, 18), 16)),
                (n =
                  r.substring(8, 18) + bufData + r.substring(18, 18 + 2 * n)),
                void 0,
                packageCommandUplink(n))
              : (void 0, packet2(hexStr2Bytes(r))),
            void 0,
            initPartBuffer(),
            validPCRC() &&
              (mOnResult.checkCmdId()
                ? null !== s
                  ? (void 0, s(byteArray2Hex(getAllBytes())))
                  : (void 0, (result = byteArray2Hex(getAllBytes())), u(result))
                : l("data verify error")));
      } else if (mUpdateFlag) {
        for (var o = new Array(e.byteLength), a = 0; a < e.byteLength; a++)
          o[a] = e.getUint8(a);
        e.getUint8(11) === calPCRC(o) && (null !== s ? s(r) : u((result = r)));
      } else void 0, i();
    } else i();
  }, 10);
}
function uuidFormat(e) {
  if (null !== e) return "0x" + e.substring(4, 13).toUpperCase();
}
function writeObj(e) {
  for (var t in e) e[t];
}
function hexStr2Bytes(e) {
  var t = 0;
  if ("" === (e = e.includes("0x") ? e.replace("0x", "") : e))
    return new Array();
  var n = e.length;
  if (n % 2 !== 0) return null;
  n /= 2;
  for (var r = new Array(), o = 0; o < n; o++) {
    var a = e.substr(t, 2),
      a = parseInt(a, 16);
    r.push(a), (t += 2);
  }
  return r;
}
export function byteArray2Hex(e) {
  return Array.prototype.map
    .call(new Uint8Array(e), function (e) {
      return ("00" + e.toString(16)).slice(-2);
    })
    .join("");
}
function stringToBytes(e) {
  for (var t, n, r = [], o = 0; o < e.length; o++) {
    for (t = e.charCodeAt(o), n = []; n.push(255 & t), (t >>= 8); );
    r = r.concat(n.reverse());
  }
  return r;
}
function sleep(e) {
  for (var t = new Date(), n = t.getTime() + e; ; )
    if ((t = new Date()).getTime() > n) return;
}
function printDataView(e) {
  for (var t = new Uint8Array(e.byteLength), n = 0; n < e.byteLength; n++)
    t[n] = e.getUint8(n);
  var r = byteArray2Hex(t);
  void 0;
}
function dataView2Hex(e) {
  for (var t = new Uint8Array(e.byteLength), n = 0; n < e.byteLength; n++)
    t[n] = e.getUint8(n);
  return byteArray2Hex(t);
}
function arrCopyArr(e, t, n, r, o) {
  for (var a = t; a < t + o; a++) (n[r] = e[a]), r++;
  return n;
}
function toHex(e) {
  return e < 16
    ? "0x0" + e.toString(16).toUpperCase()
    : "0x" + e.toString(16).toUpperCase();
}
function calCRC(e) {
  for (var t = e[0], n = 1; n < e.length; n++) t ^= e[n];
  return void 0, t;
}
function copyArr(e, t, n, r, o) {
  for (
    var a = r, s = new DataView(n), i = t + o, u = new DataView(e), l = t;
    l < i;
    l++
  ) {
    var c = u.getUint8(l);
    s.setUint8(a, c), a++;
  }
  return n;
}
function getBytesFromArr(e, t, n) {
  return n.slice(e, e + t);
}
function ab2str(e) {
  return String.fromCharCode.apply(null, new Uint16Array(e));
}
function byteArrayToInt(e) {
  for (var t = 0, n = 0; n < e.length; n++) t = (t <<= 8) | (255 & e[n]);
  return t;
}
function Str2Bytes(e) {
  var t = 0;
  if ("" === e) return new Array();
  var n = e.length;
  if (n % 2 !== 0) return null;
  n /= 2;
  for (var r = new Array(), o = 0; o < n; o++) {
    var a = e.substr(t, 2),
      a = parseInt(a, 16);
    r.push(a), (t += 2);
  }
  return r;
}
function intToHex(e) {
  e =
    !(0 <= e && e < 16) && 16 <= e && e < 256
      ? e.toString(16)
      : "0" + e.toString(16);
  return Str2Bytes(
    (e = e.length % 2 !== 0 && "0" === e.charAt(0) ? e.substring(1) : e)
  );
}
function intToHexValue(e) {
  e =
    !(0 <= e && e < 16) && 16 <= e && e < 256
      ? e.toString(16)
      : "0" + e.toString(16);
  return e;
}
var CLICKTAG = 0;
function button_onclick(e) {
  0 === CLICKTAG &&
    ((CLICKTAG = 1),
    (e.disabled = !0),
    setTimeout(function () {
      (CLICKTAG = 0), (e.disabled = !1);
    }, 3e3));
}
function getDate() {
  var e = new Date(),
    t = e.getFullYear(),
    n = e.getMonth() + 1,
    r = e.getDate(),
    o = e.getHours(),
    a = e.getMinutes(),
    e = e.getSeconds();
  return (
    t +
    "-" +
    conver(n) +
    "-" +
    conver(r) +
    " " +
    conver(o) +
    ":" +
    conver(a) +
    ":" +
    conver(e)
  );
}
function conver(e) {
  return e < 10 ? "0" + e : e;
}
export var mOnResult;

export function setOnResult(data) {
  mOnResult = data;
}
export var writeChar,
  loAZ = "abcdefghijklmnopqrstuvwxyz";
function hex2Ascii(e) {
  for (
    var t = e.toLowerCase(), n = "0123456789abcdef", r = "", o = 0, o = 0;
    o < t.length;
    o += 2
  ) {
    var a = t.charAt(o),
      s = (":" === a && (o++, (a = t.charAt(o))), t.charAt(o + 1)),
      a = n.indexOf(a) << 4;
    a |= n.indexOf(s);
    var s = parseInt(a) - 32,
      i = "?";
    r += i = 0 <= s && a <= 126 ? symbols.charAt(s) : i;
  }
  return r;
}
function isEmpty(e) {
  return null === e || void 0 === e || "" === e.trime;
}
function getFormatDateyyyyMMddHHmmss() {
  var e = new Date();
  return (
    e.getFullYear().toString() +
    conver(e.getMonth() + 1) +
    conver(e.getDate()) +
    conver(e.getHours()) +
    conver(e.getMinutes()) +
    conver(e.getSeconds())
  );
}
function getUTF8Bytes(e) {
  for (var t = [], n = e.length, r = 0; r < n; ++r) {
    var o = e.charCodeAt(r);
    65536 <= o && o <= 1114111
      ? (t.push((o >> 18) | 240),
        t.push(((o >> 12) & 63) | 128),
        t.push(((o >> 6) & 63) | 128),
        t.push((63 & o) | 128))
      : 2048 <= o && o <= 65535
      ? (t.push((o >> 12) | 224),
        t.push(((o >> 6) & 63) | 128),
        t.push((63 & o) | 128))
      : 128 <= o && o <= 2047
      ? (t.push((o >> 6) | 192), t.push((63 & o) | 128))
      : t.push(o);
  }
  return t;
}
function toGbkBytes(e) {
  for (var t = new Array(), n = 0; n < e.length; n++) {
    var r,
      o = e.charAt(n);
    "%" === o
      ? ((r = e.charAt(n + 1) + e.charAt(n + 2)),
        (r = parseInt(r, 16)),
        (r |= -256),
        t.push(r),
        (n += 2))
      : t.push(o.charCodeAt());
  }
  return t;
}
var symbols =
  (symbols =
    (symbols = " !\"#$%&'()*+,-./0123456789:;<=>?@") +
    loAZ.toUpperCase() +
    "[\\]^_`") +
  loAZ +
  "{|}~";
export function webBluetooth(e, t) {
  writeObj(e), (this.mOnResult = e), (this.writeChar = t), writeObj(mOnResult);
}
export function registNotify(e) {
  e
    .startNotifications()
    .then(function (e) {
      void 0;
    })
    .catch(function (e) {
      void 0;
    }),
    basicReadBluetooth(e);
}
webBluetooth.prototype.startSessionBluetooth = function (e, t, n) {
  startSessionBluetooth(e, t, n);
};
(bufData = ""), (bufLen = 0), (result = null);
function startSessionBluetooth(e, t, n) {
  (n *= 100),
    (result = null),
    writePromiseBluetooth(e),
    void 0,
    readBluetoothDataBuffer(t, n, function e() {
      readBluetoothDataBuffer(t, --n, e);
    });
}
function basicReadBluetooth(e) {
  e.addEventListener("characteristicvaluechanged", function (e) {
    void 0, setNotifyReceiveData(!0);
    e = e.target.value;
    printDataView(e), appendData(e);
  }),
    e.startNotifications();
}
var write_Max_len = 16,
  notifyReceiveData = !1;
function setNotifyReceiveData(e) {
  notifyReceiveData = e;
}
function getNotifyReceiveData() {
  return notifyReceiveData;
}
function basicWriteBluetooth(e, t, n) {
  writeChar.writeValue(e).then(
    function () {
      null !== t && void 0;
    },
    function (e) {
      null !== n && void 0;
    }
  );
}
function writePromiseBluetooth(e) {
  setNotifyReceiveData(!1);
  var t = e,
    e = (void 0, clearReadbuffer(), t.byteLength);
  if (e <= write_Max_len)
    void 0,
      basicWriteBluetooth(
        t,
        function () {
          void 0;
        },
        function (e) {
          void 0;
        }
      );
  else {
    for (
      var n,
        r = -1,
        o = 0,
        o =
          e % write_Max_len === 0
            ? e / write_Max_len
            : (e - (r = e % write_Max_len)) / write_Max_len + 1,
        a = write_Max_len,
        s = 0,
        i = new Array();
      0 < o;

    )
      (a = -1 !== r && 1 === o ? r : write_Max_len),
        (n = new ArrayBuffer(a)),
        copyArr(t, s * write_Max_len, n, 0, a),
        (i[s] = n),
        void 0,
        o--,
        s++;
    (writePromiseCou = 0),
      basicMultisessionBluetooth(
        i,
        function () {
          void 0;
        },
        function (e) {
          void 0;
        }
      );
  }
  void 0;
}
var writePromiseCou = 0;
function basicMultisessionBluetooth(e, t, n) {
  writePromiseCou >= e.length ||
    (writeChar.writeValue(e[writePromiseCou]).then(
      function () {
        null !== t && basicMultisessionBluetooth(e, t, n);
      },
      function (e) {}
    ),
    writePromiseCou++);
}
function startSysSessionBluetooth(e, r, o) {
  return new Promise(function (t, n) {
    (result = null),
      writePromiseBluetooth(e),
      (o *= 100),
      void 0,
      readSysBluetoothDataBuffer(
        r,
        o,
        function e() {
          readSysBluetoothDataBuffer(r, --o, e, t, n);
        },
        t,
        n
      );
  });
}
var mUpdateFlag = !1;
function setUpdate(e) {
  mUpdateFlag = e;
}
function packageInstructionQue() {
  CommandDownlink4(CmdId.CMDID_QUERY, 0, 0, 90);
  var e = getDownPBytes();
  return void 0, new Uint8Array(e).buffer;
}
function packageInstructionPart() {
  CommandDownlink4(CmdId.CMDID_PART_DATA, 0, 0, 90);
  var e = getDownPBytes();
  return void 0, new Uint8Array(e).buffer;
}
function packageInstructionReset() {
  CommandDownlink4(CmdId.CMDID_RESET, 0, 0, 15);
  var e = getDownPBytes();
  return void 0, new Uint8Array(e).buffer;
}
function readBluetoothDataBuffer(n, r, o) {
  setTimeout(function () {
    if (r <= 0) return initPartBuffer(), void void 0;
    var e, t;
    {
      if (getNotifyReceiveData())
        return null === (e = readBufferData())
          ? (initPartBuffer(), void void 0)
          : void (isCompleteInstruction()
              ? ((e = dataView2Hex(e)),
                void 0,
                "24" !== e.substring(6, 8)
                  ? "36" === e.substring(6, 8)
                    ? ((bufLen = parseInt(e.substring(14, 18), 16)),
                      (bufData += e.substring(18, 18 + 2 * bufLen)),
                      void 0,
                      startSessionBluetooth(packageInstructionPart(), n, 90))
                    : "23" === e.substring(6, 8) ||
                      "41" === e.substring(6, 8) ||
                      "43" === e.substring(6, 8) ||
                      "42" === e.substring(6, 8) ||
                      "52" === e.substring(6, 8)
                    ? (startSessionBluetooth(packageInstructionQue(), n, 90),
                      void 0)
                    : (packet2(hexStr2Bytes(e)), mOnResult.checkCmdId())
                  : (void 0,
                    0 !== bufLen
                      ? ((t = parseInt(e.substring(14, 18), 16)),
                        (t =
                          e.substring(8, 18) +
                          bufData +
                          e.substring(18, 18 + 2 * t)),
                        void 0,
                        packageCommandUplink(t))
                      : (void 0, packet2(hexStr2Bytes(e))),
                    void 0,
                    initPartBuffer(),
                    validPCRC() &&
                      mOnResult.checkCmdId() &&
                      (null !== n
                        ? n(byteArray2Hex(getAllBytes()))
                        : (result = byteArray2Hex(getAllBytes())))))
              : o());
      o();
    }
  }, 10);
}
function initPartBuffer() {
  (bufData = ""), (bufLen = 0);
}
function readSysBluetoothDataBuffer(s, e, i, u, l) {
  setTimeout(function () {
    if (t <= 0) return initPartBuffer(), void l("time out");
    if (getNotifyReceiveData()) {
      var e = readBufferData();
      if (null === e) return initPartBuffer(), void l("onError(Error.UNKNOWN)");
      if (isCompleteInstruction() && !mUpdateFlag) {
        var t,
          n,
          r = dataView2Hex(e);
        "24" !== r.substring(6, 8)
          ? "36" === r.substring(6, 8)
            ? ((n = function e() {
                readSysBluetoothDataBuffer(s, --t, e, u, l);
              }),
              (bufLen = parseInt(r.substring(14, 18), 16)),
              (bufData += r.substring(18, 18 + 2 * bufLen)),
              void 0,
              (result = null),
              writePromiseBluetooth(packageInstructionPart()),
              (t = 500),
              void 0,
              readSysBluetoothDataBuffer(s, t, n, u, l))
            : "23" === r.substring(6, 8) ||
              "41" === r.substring(6, 8) ||
              "43" === r.substring(6, 8) ||
              "42" === r.substring(6, 8) ||
              "52" === r.substring(6, 8)
            ? ((n = function e() {
                readSysBluetoothDataBuffer(s, --t, e, u, l);
              }),
              (result = null),
              writePromiseBluetooth(packageInstructionQue()),
              (t = 500),
              void 0,
              readSysBluetoothDataBuffer(s, t, n, u, l),
              void 0)
            : (packet2(hexStr2Bytes(r)), mOnResult.checkCmdId())
          : (void 0,
            0 !== bufLen
              ? ((n = parseInt(r.substring(14, 18), 16)),
                (n =
                  r.substring(8, 18) + bufData + r.substring(18, 18 + 2 * n)),
                void 0,
                packageCommandUplink(n))
              : (void 0, packet2(hexStr2Bytes(r))),
            void 0,
            initPartBuffer(),
            validPCRC() &&
              (mOnResult.checkCmdId()
                ? null !== s
                  ? (void 0, s(byteArray2Hex(getAllBytes())))
                  : (void 0, (result = byteArray2Hex(getAllBytes())), u(result))
                : l("data verify error")));
      } else if (mUpdateFlag) {
        for (var o = new Array(e.byteLength), a = 0; a < e.byteLength; a++)
          o[a] = e.getUint8(a);
        e.getUint8(11) === calPCRC(o) && (null !== s ? s(r) : u((result = r)));
      } else void 0, i();
    } else i();
  }, 10);
}
export function setWriter(data) {
  writeChar = data;
}
