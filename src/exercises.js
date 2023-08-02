const baseBlock = '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" deletable="false" movable="false"></block></xml>'

function parseMelodyString (melodyStr) {
  const melodyArr = []
  const notesSubs = melodyStr.split(';')
  for (const note of notesSubs) {
    const notePartsArr = note.split('-')
    const noteName = notePartsArr[0]
    const noteDuration = parseInt(notePartsArr[1])
    melodyArr.push({ note: noteName, duration: noteDuration })
  }

  return melodyArr
}

function processMusicExercises (exercises) {
  const resExercises = []
  for (const exercise of exercises) {
    if (exercise.targetMusic && !Array.isArray(exercise.targetMusic.melody)) {
      const melodyArr = parseMelodyString(exercise.targetMusic.melody)
      exercise.targetMusic.melody = melodyArr
    }
    resExercises.push(exercise)
  }

  return resExercises
}

const exercisesMusic = [
  {
    url: 'blocklyMusic:0',
    instructions: ['play_note_simple'],
    targetMusic: {
      melody: [{ note: 'C3', duration: 4 }, { note: 'D3', duration: 4 }, { note: 'E3', duration: 4 }, { note: 'D3', duration: 4 }, { note: 'C3', duration: 16 }]
    },
    htmlInstr: '',
    idealBlocks: 6,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="EHCm^D]A|2=*(H=ZmQcP" deletable="false" movable="false" x="10" y="10"><next><block type="play_note_simple" id="08H]9LylB6oDUXGtus{["><field name="NOTE">C</field><field name="DURATION">4</field><next><block type="play_note_simple" id="Y`)l!:V64w=Phd-#eAmA"><field name="NOTE">D</field><field name="DURATION">4</field><next><block type="play_note_simple" id="Xv356kc]Toj52,AHSspl"><field name="NOTE">E</field><field name="DURATION">4</field><next><block type="play_note_simple" id="s+0.Ps2#YWdk2ZysTvd*"><field name="NOTE">D</field><field name="DURATION">4</field><next><block type="play_note_simple" id="cnv(fPcPw|a-fnn.tt3J"><field name="NOTE">C</field><field name="DURATION">16</field></block></next></block></next></block></next></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:1',
    instructions: ['play_note_simple'],
    targetMusic: {
      melody: [{ note: 'C3', duration: 2 }, { note: 'E3', duration: 2 }, { note: 'G3', duration: 2 }, { note: 'C3', duration: 2 }, { note: 'E3', duration: 2 }, { note: 'G3', duration: 2 }, { note: 'F3', duration: 2 }, { note: 'E3', duration: 2 }, { note: 'D3', duration: 2 }, { note: 'C3', duration: 4 }]
    },
    htmlInstr: '',
    idealBlocks: 11,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="tgqh1m8l^o,fQhjR^ZyG" deletable="false" movable="false" x="10" y="10"><next><block type="play_note_simple" id="(!NfNptH^Rgo@+:cyxF;"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note_simple" id="pJG?vZ7MUP=+]9(L?is:"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note_simple" id="V2rD@!kwKa1!7`pX(Dw{"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_note_simple" id="ChoKZ|_uLr{hPfW2C7%o"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note_simple" id=".rw*;eb_ncy^cl0vtVW:"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note_simple" id="OhGM!/R38wrU`Ec1d0.D"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_note_simple" id="^T|=QUf,oQqeAaYQ_[b-"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note_simple" id="?/=Px/)/#@=D7DxmC0ou"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note_simple" id="]VJd^D0d{20rZ%Q{ozRi"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note_simple" id="a/e3|?1n3,HWbAX3|p%."><field name="NOTE">C</field><field name="DURATION">4</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:2',
    instructions: ['play_note_simple', 'play_rest'],
    targetMusic: {
      melody: [{ note: 'E3', duration: 4 }, { note: 'C3', duration: 4 }, { note: 'E3', duration: 4 }, { note: 'C3', duration: 4 }, { note: 'D3', duration: 2 }, { note: 'R', duration: 4 }, { note: 'F3', duration: 2 }, { note: 'E3', duration: 4 }, { note: 'C3', duration: 4 }]
    },
    htmlInstr: '',
    idealBlocks: 10,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="L9[.nQ!]N${o+W-tw8?7" deletable="false" movable="false" x="10" y="10"><next><block type="play_note_simple" id="OUA}gtGo5`=EtMAo}5K1"><field name="NOTE">E</field><field name="DURATION">4</field><next><block type="play_note_simple" id="l.{6F+HIhX^DY_rg,;$6"><field name="NOTE">C</field><field name="DURATION">4</field><next><block type="play_note_simple" id="f;V5pqo#(B57ZM8b.DJ5"><field name="NOTE">E</field><field name="DURATION">4</field><next><block type="play_note_simple" id=")?uEov*k^G::G22sN}Y/"><field name="NOTE">C</field><field name="DURATION">4</field><next><block type="play_note_simple" id="ib0LmE@3|-0S3k[`7xAN"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_rest" id="+`5%}e#_LZO6GO{%riLj"><field name="DURATION">4</field><next><block type="play_note_simple" id="e?_#gzRJ9/w?{O#shGFQ"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note_simple" id="XeDDbY+L[+,pIvJ(%yU2"><field name="NOTE">E</field><field name="DURATION">4</field><next><block type="play_note_simple" id="B{H`x,n}[}QVC#:C:/sf"><field name="NOTE">C</field><field name="DURATION">4</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:3',
    instructions: ['play_note', 'play_rest'],
    targetMusic: {
      melody: [{ note: 'E3', duration: 2 }, { note: 'R', duration: 2 }, { note: 'B3', duration: 2 }, { note: 'R', duration: 2 }, { note: 'E3', duration: 2 }, { note: 'R', duration: 4 }, { note: 'R', duration: 2 }, { note: 'D3', duration: 2 }, { note: 'R', duration: 2 }, { note: 'G3', duration: 2 }, { note: 'R', duration: 2 }, { note: 'E3', duration: 4 }]
    },
    htmlInstr: '',
    idealBlocks: 13,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="i$,-uN1E6$yp1cQ{kb/G" deletable="false" movable="false" x="10" y="10"><next><block type="play_note" id="@HWPZ=9*mk@z]$0dt1qB"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_rest" id="pzez-Y`r_(^Tlc}E8^C2"><field name="DURATION">2</field><next><block type="play_note" id="w4iF)5moio7~0TzZKQ.x"><field name="NOTE">B</field><field name="DURATION">2</field><next><block type="play_rest" id="s2Par0|Wo3sX0-`[RHdR"><field name="DURATION">2</field><next><block type="play_note" id="gJ0s:SSedjGQ9Xtnlu;L"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_rest" id="kMuqyG?[FT5VzDVr#.bj"><field name="DURATION">4</field><next><block type="play_rest" id="^t5;e~gK(;Vjw#XI.!d2"><field name="DURATION">2</field><next><block type="play_note" id="0pk^r+Vk!:D9=IVnmy6#"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_rest" id="3Y}R)D2[K/$:[l!KXh^~"><field name="DURATION">2</field><next><block type="play_note" id="],%n].MFAw$`Z7Gq6po8"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_rest" id="Ae_b)Y7/*9Q5^uhE(Rea"><field name="DURATION">2</field><next><block type="play_note" id="~T.FTqSqOtejv*a+UD(}"><field name="NOTE">E</field><field name="DURATION">4</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:4',
    instructions: ['play_note_simple', 'change_tone'],
    targetMusic: {
      melody: [{ note: 'C3', duration: 2 }, { note: 'D3', duration: 2 }, { note: 'E3', duration: 2 }, { note: 'F3', duration: 2 }, { note: 'G3', duration: 2 }, { note: 'A3', duration: 2 }, { note: 'B3', duration: 2 }, { note: 'C4', duration: 2 }]
    },
    htmlInstr: '',
    idealBlocks: 10,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="v.tk)o/;l9,6taQZ+y;g" deletable="false" movable="false" x="10" y="10"><next><block type="play_note_simple" id="=F]eh?9MWfbW85m?)%g6"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note_simple" id="$VG1ZU16:ZV8;IQG2A45"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note_simple" id="Nmn)ufqt#5tHTX*!/![L"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note_simple" id="F%js1Kj/UbKbVQ}hhdn?"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note_simple" id="c!|fKRfP.Ax(pL;i6x-J"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_note_simple" id="|I1~J`YCSQ51rwU`k_D:"><field name="NOTE">A</field><field name="DURATION">2</field><next><block type="play_note_simple" id="/a(WvuSqSP=jh)_DmjOV"><field name="NOTE">B</field><field name="DURATION">2</field><next><block type="change_tone" id="v-w0vp]}/IuH^CjLljzM"><field name="TONE">4</field><next><block type="play_note_simple" id="!eX4B|76J3buofS3/,.3"><field name="NOTE">C</field><field name="DURATION">2</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:5',
    instructions: ['play_note', 'play_rest', 'change_tone'],
    targetMusic: {
      melody: [{ note: 'C4', duration: 2 }, { note: 'D#4', duration: 2 }, { note: 'E4', duration: 2 }, { note: 'R', duration: 2 }, { note: 'E3', duration: 2 }, { note: 'R', duration: 2 }, { note: 'E3', duration: 2 }, { note: 'F3', duration: 2 }, { note: 'E3', duration: 2 }]
    },
    htmlInstr: '',
    idealBlocks: 12,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="Q-`ZbLXweNle[n`OLhj^" deletable="false" movable="false" x="10" y="10"><next><block type="change_tone" id="`#GZL)JU:]Pn`mh,@HKW"><field name="TONE">4</field><next><block type="play_note" id="KTRIhBoBYfc.ms}/87X3"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="ihxI2aF7`p~*1fwF~NB:"><field name="NOTE">D#</field><field name="DURATION">2</field><next><block type="play_note" id="M[k.w9]=#E87J?wk6|#n"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_rest" id="M2bNfSn7#0KL}kCe^`^X"><field name="DURATION">2</field><next><block type="change_tone" id="i{MBLE4G.`vluSTnOT(4"><field name="TONE">3</field><next><block type="play_note" id="HrECrhhhQS^FtOLA2Qw2"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_rest" id="s~R7EhHL[9xc^HrZsaxU"><field name="DURATION">2</field><next><block type="play_note" id="KDce}:SL5%~eJIW`_0k{"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="=JsA3W!jN1+3UXZ53(pv"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="`}{3N1;JS`BWn@k]6.z|"><field name="NOTE">E</field><field name="DURATION">2</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:7',
    instructions: ['play_note'],
    targetMusic: {
      melody: 'E3-2;G#3-2;B3-2;E3-2;G#3-2;B3-2;E3-2;G#3-2;B3-2;E3-2;G#3-2;B3-2'
    },
    htmlInstr: '',
    idealBlocks: 13,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="E(*[FI]Hb5oD-J~UETjH" deletable="false" movable="false" x="10" y="10"><next><block type="play_note" id="}#Zlz~Emrg*p[8Ar}UF9"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="ZpOm5Ygeq_Gxr-Df%1Pi"><field name="NOTE">G#</field><field name="DURATION">2</field><next><block type="play_note" id="n$HT*zd-Lp0*:)ff8{Or"><field name="NOTE">B</field><field name="DURATION">2</field><next><block type="play_note" id="v)co@dtnZ2`;[*XXXSpb"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="!-cUt])7_xfPm@},CX3c"><field name="NOTE">G#</field><field name="DURATION">2</field><next><block type="play_note" id="!T80}~as5wTmbAQ4)1%Q"><field name="NOTE">B</field><field name="DURATION">2</field><next><block type="play_note" id="0B9LS[~VJ5[-}YILaP{#"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="nweS?w@mjrbmh8Mex2sM"><field name="NOTE">G#</field><field name="DURATION">2</field><next><block type="play_note" id="+{`6j+A=H=EWIO,{P!ON"><field name="NOTE">B</field><field name="DURATION">2</field><next><block type="play_note" id="hs*__U{`@1wskXS[:3~~"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="v:`njT}vWyt#5%HgQgs+"><field name="NOTE">G#</field><field name="DURATION">2</field><next><block type="play_note" id="D%6S77@Mkm[:U=dRmv)`"><field name="NOTE">B</field><field name="DURATION">2</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:8',
    instructions: ['play_note', 'music_repeat'],
    targetMusic: {
      melody: 'E3-2;G#3-2;B3-2;E3-2;G#3-2;B3-2;E3-2;G#3-2;B3-2;E3-2;G#3-2;B3-2'
    },
    htmlInstr: '',
    idealBlocks: 5,
    optimalCode: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="H0naIwmG@{kNcRG4g#cc" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="ROIg:a84@.57iN99Zr.p"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="nh{c]lpQPM)jkuP,P5`["><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="vcx1hEP}Vo:fX3LDS2V="><field name="NOTE">G#</field><field name="DURATION">2</field><next><block type="play_note" id="uIcLrt03?Irpi]VKamSN"><field name="NOTE">B</field><field name="DURATION">2</field></block></next></block></next></block></statement></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:9',
    instructions: ['play_note', 'play_rest', 'music_repeat'],
    targetMusic: {
      melody: 'C3-4;R-4;C#3-4;R-4;C3-4;R-4;C#3-4;R-4;C3-2;R-2;C#3-2;R-2;C3-2;R-2;C#3-2;R-2;C3-2;C#3-2;C3-2;C#3-2;C3-2;C#3-2;C3-2;C#3-2'
    },
    htmlInstr: '',
    idealBlocks: 14,
    optimalCode: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="0s$l9A_-K{)1N({/@TDy" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="ma=R!9pARKqi`yq5h*!w"><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="Aego9un[!,pu@Tpg!W;r"><field name="NOTE">C</field><field name="DURATION">4</field><next><block type="play_rest" id="k1lacO6)Zz5m_C!B`sd!"><field name="DURATION">4</field><next><block type="play_note" id="Ql`0yx)dqK[nSEDIoF`}"><field name="NOTE">C#</field><field name="DURATION">4</field><next><block type="play_rest" id="-8:~|{_fnMtT7f,`hfL:"><field name="DURATION">4</field></block></next></block></next></block></next></block></statement><next><block type="music_repeat" id="V6(WJ)Z(.3u3cfNDiW?k"><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="hA+n_iaw0CVAEgn/]Z.W"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_rest" id="671_/hiBlC#*H%GP!ta^"><field name="DURATION">2</field><next><block type="play_note" id="eUOXr#o)_6`=4*^li(Ps"><field name="NOTE">C#</field><field name="DURATION">2</field><next><block type="play_rest" id="$:k,Q./D@4|f2Yv{ygof"><field name="DURATION">2</field></block></next></block></next></block></next></block></statement><next><block type="music_repeat" id=";p|VG|QWF!zTd(Uojubn"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="$f7m1#ja!}k=j}kwYyIc"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="N?#}0n}T-ACLpMct9miF"><field name="NOTE">C#</field><field name="DURATION">2</field></block></next></block></statement></block></next></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:10',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat'],
    targetMusic: {
      melody: 'C3-1;R-1;C3-1;R-1;C3-1;R-1;F3-8;C4-8;A#3-2;A3-2;G3-2;F4-8;C4-8'
    },
    htmlInstr: '',
    idealBlocks: 14,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="$gei:x%*mo+1A}N^t_kW" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="M#P.S|JXijauZ3,M|lR="><field name="TIMES">3</field><statement name="DO"><block type="play_note" id="LT*9N()U]}JG|Kb=Xeev"><field name="NOTE">C</field><field name="DURATION">1</field><next><block type="play_rest" id="JhF?Cb%OQydqt]pTyA}w"><field name="DURATION">1</field></block></next></block></statement><next><block type="play_note" id="~e[wOcRXy/PxLq.+;@gF"><field name="NOTE">F</field><field name="DURATION">8</field><next><block type="change_tone" id="U_/51KK6]vdT#kjx:4n6"><field name="TONE">4</field><next><block type="play_note" id="_pkKG^eM_jU4IPHAT8jj"><field name="NOTE">C</field><field name="DURATION">8</field><next><block type="change_tone" id="A5zJa.KwU(]1s|W111S#"><field name="TONE">3</field><next><block type="play_note" id="mG1`7X}#oONyLMF0jxn5"><field name="NOTE">A#</field><field name="DURATION">2</field><next><block type="play_note" id="oU`/UqUZ9zyDZ!1YdtU("><field name="NOTE">A</field><field name="DURATION">2</field><next><block type="play_note" id=":2K*CVLwQO@nYx=K,Iuw"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="change_tone" id="6etLKA#=QCA=cVV?aJ@8"><field name="TONE">4</field><next><block type="play_note" id="?^t+%INrD[.B%WGbawXt"><field name="NOTE">F</field><field name="DURATION">8</field><next><block type="play_note" id="mGbR[WT5+[F`d|1:W*l3"><field name="NOTE">C</field><field name="DURATION">8</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:11',
    instructions: ['play_note', 'music_repeat'],
    targetMusic: {
      melody: 'F3-2;A3-2;F3-2;A3-2;G3-2;B3-2;G3-2;B3-2;F3-2;A3-2;F3-2;A3-2;G3-2;B3-2;G3-2;B3-2'
    },
    htmlInstr: '',
    idealBlocks: 8,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="~Y2%tNIu^%(-AiX_jiSR" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="/6d_jXs`Vk^gNw:8]$*{"><field name="TIMES">2</field><statement name="DO"><block type="music_repeat" id="[BVf9}N`_)K*T+.ws*Op"><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="Y)*yvmSH+OJwnV#m;yr4"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="eEI`hj^wt_-DuW+/L(0i"><field name="NOTE">A</field><field name="DURATION">2</field></block></next></block></statement><next><block type="music_repeat" id="=R}s#6QP9%iKm#EPvYB-"><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="NSQwq90JvnDgi@iBWhe;"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_note" id="C9$yGF;6x__v4*Hl@)J@"><field name="NOTE">B</field><field name="DURATION">2</field></block></next></block></statement></block></next></block></statement></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:12',
    instructions: ['play_note', 'music_repeat'],
    targetMusic: {
      melody: 'F3-2;A3-2;F3-2;A3-2;G3-2;B3-2;G3-2;B3-2;F3-2;A3-2;F3-2;A3-2;G3-2;B3-2;G3-2;B3-2;F3-2;A3-2;F3-2;A3-2;G3-2;B3-2;G3-2;B3-2;F3-2;A3-2;F3-2;A3-2;G3-2;B3-2;G3-2;B3-2;F3-2;A3-2;F3-2;A3-2;G3-2;B3-2;G3-2;B3-2;F3-2;A3-2;F3-2;A3-2;G3-2;B3-2;G3-2;B3-2'
    },
    htmlInstr: '',
    idealBlocks: 8,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="z-.!9Jq08@1F28+ypuSY" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="E9zSgU=Ao*c8N{XYbLmG"><field name="TIMES">6</field><statement name="DO"><block type="music_repeat" id="Ge~5xCY5b(,cbHy_UA2i"><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="roG(u^iv}F@MICp-Pm;e"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="ZlfxvXN|YC%w1Xs|KWfd"><field name="NOTE">A</field><field name="DURATION">2</field></block></next></block></statement><next><block type="music_repeat" id="V9C%{=ych=mTm1z)|PG("><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="b1FQ*|o:dW.,0DK1}Yvi"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_note" id="g3llwX$Sdm!zk=!xXsZy"><field name="NOTE">B</field><field name="DURATION">2</field></block></next></block></statement></block></next></block></statement></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:13',
    instructions: ['play_note', 'change_tone', 'music_repeat'],
    targetMusic: {
      melody: 'F3-2;A3-2;C4-2;F3-2;A3-2;C4-2;G3-2;B3-2;D4-2;G3-2;B3-2;D4-2'
    },
    htmlInstr: '',
    idealBlocks: 13,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="dXy^a[i7I3uh02AKT$A!" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="0$JtMA8w2dz[6S:*-CRW"><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="CVl,+BKv4n+i]1F7Y!O5"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="B-iP@W26^w%$6%41~N)e"><field name="NOTE">A</field><field name="DURATION">2</field><next><block type="change_tone" id="A5/,|J^JkKZ0+2t7@n@A"><field name="TONE">4</field><next><block type="play_note" id="V6@Go*+o=1;yzJUnIFX="><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="change_tone" id="*=ZyJvQ_MSfI~{q-|k@c"><field name="TONE">3</field></block></next></block></next></block></next></block></next></block></statement><next><block type="music_repeat" id="`Og.Z6fSQomt7,vr/r_R"><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="R;K1Wr``LcHED}_-?|uO"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_note" id="P7%H_2@;]#!k;K3R~Cqs"><field name="NOTE">B</field><field name="DURATION">2</field><next><block type="change_tone" id="5y_7Y@BB*fmlRtKSC5%k"><field name="TONE">4</field><next><block type="play_note" id="$tfG+|iIGF9{U.72Fr8]"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="change_tone" id="~Flsy!*AW%m6#KR*Q9-m"><field name="TONE">3</field></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:14',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat'],
    targetMusic: {
      melody: 'E4-1;F4-1;E4-1;F4-1;E4-1;F4-1;E4-1;F4-1;E4-1;F4-1;E4-1;F4-1;E4-1;F4-1;E3-2;R-2;E3-2;R-2;G3-2;R-1;A3-2;R-1;E3-2;R-2;E3-2;R-2;D3-2;R-1;D#3-2'
    },
    htmlInstr: '',
    idealBlocks: 19,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="SjIa${m:if.EhY^V8`eo" deletable="false" movable="false" x="10" y="10"><next><block type="change_tone" id="xK}W-!J!+I1s4[cd3{(:"><field name="TONE">4</field><next><block type="music_repeat" id="KY$)h{,w*()}/|KJr`w|"><field name="TIMES">7</field><statement name="DO"><block type="play_note" id="y$Y{WdR}*/eG|_4o04oy"><field name="NOTE">E</field><field name="DURATION">1</field><next><block type="play_note" id="+#5Yl+Em::DLZ,uKIm%7"><field name="NOTE">F</field><field name="DURATION">1</field></block></next></block></statement><next><block type="change_tone" id="ykbPgq^$XvoRo(~qBeo!"><field name="TONE">3</field><next><block type="music_repeat" id="Cu%-Lbxn--,pi|ci/lo{"><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="-MlI/Pm8fjVE!l:xF]p?"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_rest" id="I.K)oGdxw]kXv%GNzsv_"><field name="DURATION">2</field></block></next></block></statement><next><block type="play_note" id="aBi@3(@I78zB+B;MdWTD"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_rest" id="_fBhdFGw;I8g-!9@jO-E"><field name="DURATION">1</field><next><block type="play_note" id=":Y;xxSym~mYqQo:[#(k;"><field name="NOTE">A</field><field name="DURATION">2</field><next><block type="play_rest" id="w8Up]NcoDTvMW)XN@rD@"><field name="DURATION">1</field><next><block type="music_repeat" id="b(W;bEm;Rz^py_5TE[B+"><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="+LxEVa%Ig2hC3=n]SJJX"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_rest" id="Yf6~DtMQ/B4~`xLF^2~W"><field name="DURATION">2</field></block></next></block></statement><next><block type="play_note" id="Mg9.`o[6@GcFmfT0h(w}"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_rest" id="lBUuOJNAQ):3R!NYnhYq"><field name="DURATION">1</field><next><block type="play_note" id="C_x-uPJ@)8i(_ZeukPE*"><field name="NOTE">D#</field><field name="DURATION">2</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:15',
    instructions: ['play_note', 'play_rest', 'music_repeat'],
    targetMusic: {
      melody: [{ note: 'C3', duration: 4 }, { note: 'R', duration: 4 }, { note: 'C#3', duration: 4 }, { note: 'R', duration: 4 }, { note: 'C3', duration: 2 }, { note: 'R', duration: 2 }, { note: 'C#3', duration: 2 }, { note: 'R', duration: 2 }, { note: 'C3', duration: 2 }, { note: 'R', duration: 2 }, { note: 'C#3', duration: 2 }, { note: 'R', duration: 2 }, { note: 'C3', duration: 2 }, { note: 'C#3', duration: 2 }, { note: 'C3', duration: 2 }, { note: 'C#3', duration: 2 }, { note: 'C3', duration: 2 }, { note: 'C#3', duration: 2 }, { note: 'C3', duration: 2 }, { note: 'C#3', duration: 2 }]
    },
    htmlInstr: '',
    idealBlocks: 13,
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:17',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat'],
    targetMusic: {
      melody: 'A3-2;D4-2;E4-2;F4-2;D4-8;A3-2;D4-2;E4-2;F4-2;D4-8'
    },
    htmlInstr: 'debug',
    idealBlocks: 9,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="9c^;!rAu|xT(r@[!7=Gu" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="JDZ,=23Gh?J/Fjf3KPLb"><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="GN`U26jQn)#tJ5eQvGnb"><field name="NOTE">A</field><field name="DURATION">2</field><next><block type="change_tone" id="12A=87Fs97JGm45$0Wl)"><field name="TONE">4</field><next><block type="play_note" id="I*xB8+!2(0)3V%#Vc!M%"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="(?hl~2v3)-:6;*@,5r!F"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="Z$9`2R$+uqG2pEsMOyeU"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id=".ehoP0S:dpAE13$6sfRb"><field name="NOTE">D</field><field name="DURATION">8</field><next><block type="change_tone" id="Yb;in$p@tGsp#?*m0F?U"><field name="TONE">3</field></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></xml>',
    defaultCode: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="9c^;!rAu|xT(r@[!7=Gu" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="JDZ,=23Gh?J/Fjf3KPLb"><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="GN`U26jQn)#tJ5eQvGnb"><field name="NOTE">A</field><field name="DURATION">2</field><next><block type="play_note" id="I*xB8+!2(0)3V%#Vc!M%"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="(?hl~2v3)-:6;*@,5r!F"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="Z$9`2R$+uqG2pEsMOyeU"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id=".ehoP0S:dpAE13$6sfRb"><field name="NOTE">D</field><field name="DURATION">8</field></block></next></block></next></block></next></block></next></block></statement></block></next></block></xml>'
  },
  {
    url: 'blocklyMusic:18',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat'],
    targetMusic: {
      melody: 'A3-2;D4-2;E4-2;F4-4;E4-2;D4-2;F4-4;E4-2;D4-2;A4-2;R-2;A4-2;R-2;A4-8'
    },
    htmlInstr: 'debug',
    idealBlocks: 16,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="Fi@*r_c+n,[+e{R9j$bG" deletable="false" movable="false" x="10" y="10"><next><block type="play_note" id="2+Y5^;P-p-IvTFrLi-TA"><field name="NOTE">A</field><field name="DURATION">2</field><next><block type="change_tone" id="|twP7qj~B3_J+FRWvEzV"><field name="TONE">4</field><next><block type="play_note" id=".Nn~h0WV8c!QZY6`?ld["><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="6Qmo)Do[OsBPR8.1a,Rs"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="/Jm|zqJV%o1M4i]wEBfD"><field name="NOTE">F</field><field name="DURATION">4</field><next><block type="play_note" id="P_@0-SttO-/)0jR~%{|B"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="6voYU2I_|i^GT]f.!7Kl"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="uM3:*eQ[=f/W15:)D4{*"><field name="NOTE">F</field><field name="DURATION">4</field><next><block type="play_note" id="c9pY:IAb]]}zl3ER)lxV"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="3N.Noq@fM+3.,?8l#8ej"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="(5n#Nc.`YF`}=~DwNHPE"><field name="NOTE">A</field><field name="DURATION">2</field><next><block type="play_rest" id="^:1~m~T+f2JQ|Sdh?Ir1"><field name="DURATION">2</field><next><block type="play_note" id="v0gp^z0rOXARhj%UX$k4"><field name="NOTE">A</field><field name="DURATION">2</field><next><block type="play_rest" id="5)b.n0KQmcB%R[e;*N9Q"><field name="DURATION">2</field><next><block type="play_note" id="jXm0G1R1{ToMSH!cYg.Y"><field name="NOTE">A</field><field name="DURATION">8</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
    defaultCode: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="Fi@*r_c+n,[+e{R9j$bG" deletable="false" movable="false" x="10" y="10"><next><block type="play_note" id="2+Y5^;P-p-IvTFrLi-TA"><field name="NOTE">A</field><field name="DURATION">2</field><next><block type="change_tone" id="|twP7qj~B3_J+FRWvEzV"><field name="TONE">4</field><next><block type="play_note" id=".Nn~h0WV8c!QZY6`?ld["><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="6Qmo)Do[OsBPR8.1a,Rs"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="/Jm|zqJV%o1M4i]wEBfD"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="P_@0-SttO-/)0jR~%{|B"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="6voYU2I_|i^GT]f.!7Kl"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="uM3:*eQ[=f/W15:)D4{*"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="c9pY:IAb]]}zl3ER)lxV"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="3N.Noq@fM+3.,?8l#8ej"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="(5n#Nc.`YF`}=~DwNHPE"><field name="NOTE">A</field><field name="DURATION">2</field><next><block type="play_rest" id="^:1~m~T+f2JQ|Sdh?Ir1"><field name="DURATION">2</field><next><block type="play_note" id="v0gp^z0rOXARhj%UX$k4"><field name="NOTE">A</field><field name="DURATION">2</field><next><block type="play_rest" id="5)b.n0KQmcB%R[e;*N9Q"><field name="DURATION">2</field><next><block type="play_note" id="jXm0G1R1{ToMSH!cYg.Y"><field name="NOTE">A</field><field name="DURATION">2</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>'
  },
  {
    url: 'blocklyMusic:19',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat'],
    targetMusic: {
      melody: 'C3-2;R-2;C3-2;R-2;C3-2;R-2;C3-2;R-1;D3-2;E3-2;R-1;C3-2;E3-2;R-1;F3-2;G3-4'
    },
    htmlInstr: 'debug',
    idealBlocks: 14,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id=".kVx$3hLjz{ept8POw@A" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="o7`v*(Ypa%FUd5{jnQ;J"><field name="TIMES">3</field><statement name="DO"><block type="play_note" id="kX8yZ304E~)=gbl_HgJ8"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_rest" id=":Q=w;2e4vuCCc.E`wLjl"><field name="DURATION">2</field></block></next></block></statement><next><block type="play_note" id="z`YD!@-|p{jVNOKh-JPg"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_rest" id="hl*HNp$MA=BudS%/x3.@"><field name="DURATION">1</field><next><block type="play_note" id=".ym#?T]tORRG6}pO4sFa"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="rm2$9g!8KE1_0WNOBaLL"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_rest" id="KNsT+KSDtUPI7T7xvQ5C"><field name="DURATION">1</field><next><block type="play_note" id="GdGy4@i^?:@%0Jxi%qM}"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="J#S}X7X69vY|PciU6,p%"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_rest" id="/(J|V+BI66SF@Y4pxRC9"><field name="DURATION">1</field><next><block type="play_note" id="F.fVGDWZ1}-LXTTl;74_"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="WlH/cU|(o;@!m-f{cD(J"><field name="NOTE">G</field><field name="DURATION">4</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
    defaultCode: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id=".kVx$3hLjz{ept8POw@A" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="o7`v*(Ypa%FUd5{jnQ;J"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="kX8yZ304E~)=gbl_HgJ8"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_rest" id=":Q=w;2e4vuCCc.E`wLjl"><field name="DURATION">2</field></block></next></block></statement><next><block type="play_note" id=".ym#?T]tORRG6}pO4sFa"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="rm2$9g!8KE1_0WNOBaLL"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_rest" id="KNsT+KSDtUPI7T7xvQ5C"><field name="DURATION">1</field><next><block type="play_note" id="GdGy4@i^?:@%0Jxi%qM}"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="J#S}X7X69vY|PciU6,p%"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_rest" id="/(J|V+BI66SF@Y4pxRC9"><field name="DURATION">1</field><next><block type="play_note" id="F.fVGDWZ1}-LXTTl;74_"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="WlH/cU|(o;@!m-f{cD(J"><field name="NOTE">G</field><field name="DURATION">4</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>'
  },
  {
    url: 'blocklyMusic:20',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat'],
    targetMusic: {
      melody: 'C4-1;R-1;C4-1;R-1;C4-1;R-1;G3-1;R-1;G3-1;R-1;G3-1;R-1;E3-1;R-1;E3-1;R-1;E3-1;R-1;C3-1;R-1;C3-1;R-1;C3-1;R-1'
    },
    htmlInstr: 'debug',
    idealBlocks: 15,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="EA[YLaJ%+7Sd#,,r%:KL" deletable="false" movable="false" x="10" y="10"><next><block type="change_tone" id="Njp~RI/5Xj!s5,h9%=C;"><field name="TONE">4</field><next><block type="music_repeat" id="]xOfI83FUQSrn7QUgT5Y"><field name="TIMES">3</field><statement name="DO"><block type="play_note" id="953W2Jb_Ka#bJqqOA6/Z"><field name="NOTE">C</field><field name="DURATION">1</field><next><block type="play_rest" id="1N6kh/u}9vwYU0[/[2HK"><field name="DURATION">1</field></block></next></block></statement><next><block type="change_tone" id=":S(*PJu3Vx%a+:o)BkPU"><field name="TONE">3</field><next><block type="music_repeat" id="c#imzp8$:=NX:.kwbcrR"><field name="TIMES">3</field><statement name="DO"><block type="play_note" id="sK.A[VKSQsXan+}%dN;1"><field name="NOTE">G</field><field name="DURATION">1</field><next><block type="play_rest" id="pv/Ob1(A5YO)rXdSVHwa"><field name="DURATION">1</field></block></next></block></statement><next><block type="music_repeat" id="pxL-#Xlslgdzh#oDxkF$"><field name="TIMES">3</field><statement name="DO"><block type="play_note" id="npJLv6rO253dY/2|*}k7"><field name="NOTE">E</field><field name="DURATION">1</field><next><block type="play_rest" id="}81{}X!1*yz`B1jw-vz("><field name="DURATION">1</field></block></next></block></statement><next><block type="music_repeat" id="3{S#Mbrz}DQgZ0(159(d"><field name="TIMES">3</field><statement name="DO"><block type="play_note" id=",{]Gi9BfC!`t=S(w}OD*"><field name="NOTE">C</field><field name="DURATION">1</field><next><block type="play_rest" id="AcO-~7Jk+:4qkRL5a2+h"><field name="DURATION">1</field></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
    defaultCode: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="EA[YLaJ%+7Sd#,,r%:KL" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="]xOfI83FUQSrn7QUgT5Y"><field name="TIMES">3</field><statement name="DO"><block type="play_note" id="953W2Jb_Ka#bJqqOA6/Z"><field name="NOTE">C</field><field name="DURATION">1</field><next><block type="play_rest" id="1N6kh/u}9vwYU0[/[2HK"><field name="DURATION">1</field></block></next></block></statement><next><block type="music_repeat" id="c#imzp8$:=NX:.kwbcrR"><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="sK.A[VKSQsXan+}%dN;1"><field name="NOTE">G</field><field name="DURATION">1</field><next><block type="play_rest" id="pv/Ob1(A5YO)rXdSVHwa"><field name="DURATION">1</field></block></next></block></statement><next><block type="music_repeat" id="pxL-#Xlslgdzh#oDxkF$"><field name="TIMES">3</field><statement name="DO"><block type="play_note" id="npJLv6rO253dY/2|*}k7"><field name="NOTE">E</field><field name="DURATION">1</field><next><block type="play_rest" id="}81{}X!1*yz`B1jw-vz("><field name="DURATION">1</field></block></next></block></statement><next><block type="music_repeat" id="3{S#Mbrz}DQgZ0(159(d"><field name="TIMES">3</field><statement name="DO"><block type="play_note" id=",{]Gi9BfC!`t=S(w}OD*"><field name="NOTE">C</field><field name="DURATION">8</field><next><block type="play_rest" id="AcO-~7Jk+:4qkRL5a2+h"><field name="DURATION">1</field></block></next></block></statement></block></next></block></next></block></next></block></next></block></xml>'
  },
  {
    url: 'blocklyMusic:21',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat'],
    targetMusic: {
      melody: 'G3-4;F3-2;E3-4;D3-2;C3-4'
    },
    htmlInstr: '',
    idealBlocks: 6,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="W*~`x,)!KPX#pw;imZEm" deletable="false" movable="false" x="10" y="10"><next><block type="play_note" id=":L9^c:h%)Tz@iyYyPZv,"><field name="NOTE">G</field><field name="DURATION">4</field><next><block type="play_note" id="b5*s|8Y?8tqRp;4`9Cno"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="D/4:$]9Db~zG9JswcO7X"><field name="NOTE">E</field><field name="DURATION">4</field><next><block type="play_note" id="7D(SR85-%70t.%`b2]8f"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="*=*fkU!B_KwIIBt6OrcS"><field name="NOTE">C</field><field name="DURATION">4</field></block></next></block></next></block></next></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:22',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat'],
    targetMusic: {
      melody: 'F4-4;R-2;F4-4;R-2;D#4-2;F4-2;G4-4;C4-4;D#4-4;R-2;F4-4;R-2;F4-4;R-2;D#4-2;F4-2;G4-4;C4-4;D#4-4;R-2'
    },
    htmlInstr: 'debug',
    idealBlocks: 12,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="66SUMN,Ahqx@ffooa7r)" deletable="false" movable="false" x="10" y="10"><next><block type="change_tone" id="5~S:]iq@T}n*f%lWnLp:"><field name="TONE">4</field><next><block type="music_repeat" id="XDc7Z`Ig*r7qp[,LY--1"><field name="TIMES">2</field><statement name="DO"><block type="music_repeat" id="4cUAojf.FNDIkPOm_;ZU"><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="qM7f(leHfMy8P-s}W?8g"><field name="NOTE">F</field><field name="DURATION">4</field><next><block type="play_rest" id="IvG[8t0d{3}e{{omZ67@"><field name="DURATION">2</field></block></next></block></statement><next><block type="play_note" id="JUGcLDt^2(dA[YI,zdfg"><field name="NOTE">D#</field><field name="DURATION">2</field><next><block type="play_note" id="JIbtwb:;6L_M,.z}q+G)"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="Tu=HC_vD||4kWgn*4AzM"><field name="NOTE">G</field><field name="DURATION">4</field><next><block type="play_note" id="3chd[W56zY0hf(ub@^z^"><field name="NOTE">C</field><field name="DURATION">4</field><next><block type="play_note" id="mVS_1:^S;NTNZVw{hSrH"><field name="NOTE">D#</field><field name="DURATION">4</field><next><block type="play_rest" id="e2uv91YIQVqqpM_ilW*g"><field name="DURATION">2</field></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>',
    defaultCode: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="66SUMN,Ahqx@ffooa7r)" deletable="false" movable="false" x="10" y="10"><next><block type="change_tone" id="5~S:]iq@T}n*f%lWnLp:"><field name="TONE">4</field><next><block type="music_repeat" id="XDc7Z`Ig*r7qp[,LY--1"><field name="TIMES">2</field><statement name="DO"><block type="music_repeat" id="4cUAojf.FNDIkPOm_;ZU"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="qM7f(leHfMy8P-s}W?8g"><field name="NOTE">F</field><field name="DURATION">4</field><next><block type="play_rest" id="IvG[8t0d{3}e{{omZ67@"><field name="DURATION">2</field></block></next></block></statement><next><block type="play_note" id="JUGcLDt^2(dA[YI,zdfg"><field name="NOTE">D#</field><field name="DURATION">2</field><next><block type="play_note" id="JIbtwb:;6L_M,.z}q+G)"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="Tu=HC_vD||4kWgn*4AzM"><field name="NOTE">G</field><field name="DURATION">4</field><next><block type="play_note" id="3chd[W56zY0hf(ub@^z^"><field name="NOTE">C</field><field name="DURATION">4</field><next><block type="play_note" id="mVS_1:^S;NTNZVw{hSrH"><field name="NOTE">D#</field><field name="DURATION">4</field></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></xml>'
  },
  {
    url: 'blocklyMusic:23',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat'],
    targetMusic: {
      melody: 'A#4-2;G4-4;F4-4;D#4-4;R-2;A#4-2;G4-4;F4-4;D#4-4;R-2;F4-8'
    },
    htmlInstr: '',
    idealBlocks: 9,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="[9rZc^ngM8lRs6!/f9I?" deletable="false" movable="false" x="10" y="10"><next><block type="change_tone" id="[c6-eK$#OD/?VVt2wmX("><field name="TONE">4</field><next><block type="music_repeat" id="TJwP_pO)T3fVN92OU^`T"><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="/wQfoG#e4O4N/,T?KB#S"><field name="NOTE">A#</field><field name="DURATION">2</field><next><block type="play_note" id="A|c*!SOc-*)Fu:B$GVPM"><field name="NOTE">G</field><field name="DURATION">4</field><next><block type="play_note" id=",+ME@}s+N+*r*_Hd4cpm"><field name="NOTE">F</field><field name="DURATION">4</field><next><block type="play_note" id="jQ4^I9VDhQgk+(3.^~0:"><field name="NOTE">D#</field><field name="DURATION">4</field><next><block type="play_rest" id="FO)WCewqT;^XY8%;*vvC"><field name="DURATION">2</field></block></next></block></next></block></next></block></next></block></statement><next><block type="play_note" id=";fHzL`:LD-G,?4R6dy}W"><field name="NOTE">F</field><field name="DURATION">8</field></block></next></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:24',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat'],
    targetMusic: {
      melody: 'C3-2;R-2;C3-2;R-2;C3-2;R-2;C3-2;R-2;G3-2;R-2;G3-2;R-2;G3-2;R-2;G3-2;R-2;C3-2;R-2;C3-2;R-2;C3-2;R-2;C3-2;R-2;G3-2;R-2;G3-2;R-2;G3-2;R-2;G3-2;R-2;C3-2;R-2;C3-2;R-2;C3-2;R-2;C3-2;R-2;G3-2;R-2;G3-2;R-2;G3-2;R-2;G3-2;R-2;C3-2;R-2;C3-2;R-2;C3-2;R-2;C3-2;R-2;G3-2;R-2;G3-2;R-2;G3-2;R-2;G3-2;R-2'
    },
    htmlInstr: '',
    idealBlocks: 8,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="@)V~ebB1ot2g%]isORXe" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="EQB4j=@BH{r%W]PeUYyr"><field name="TIMES">4</field><statement name="DO"><block type="music_repeat" id="}OqWOD#3uG^:4Lt~b!I!"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="muA7}Aw+i6N{5$dKrQ4Y"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_rest" id="*J?;8k[N,{cYZ}O82HdB"><field name="DURATION">2</field></block></next></block></statement><next><block type="music_repeat" id="dU44,$?(v)l+g4iJTC+("><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="J2vx#|=vVS$4nuJ!XqFa"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_rest" id="fnmA8~zpl9A/+cxQH;,)"><field name="DURATION">2</field></block></next></block></statement></block></next></block></statement></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:25',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_iteration'],
    targetMusic: {
      melody: 'D3-2;F#3-2;A3-2;D3-2;F#3-2;A3-2;D3-2;F#3-2;A3-2;D4-2;F#4-2;A4-2'
    },
    htmlInstr: '',
    idealBlocks: 7,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="SNcEh[+C,yezLm8He1(T" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="KM@2CQ}Wn`[O+Q@wg|NV"><field name="TIMES">4</field><statement name="DO"><block type="if_music_iteration" id="JAfs{SiIN/j!=3XZHmvc"><field name="REPETITION">last</field><statement name="DO"><block type="change_tone" id="*3{+;oE#w-DVp?C#m{nS"><field name="TONE">4</field></block></statement><next><block type="play_note" id="RSS+9fB9g)HzmNK[pWE("><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="?JHz5f}xCX(Dl%GB*tee"><field name="NOTE">F#</field><field name="DURATION">2</field><next><block type="play_note" id="^(54b9^VhtU@H?Y,9WJQ"><field name="NOTE">A</field><field name="DURATION">2</field></block></next></block></next></block></next></block></statement></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:26',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_tone'],
    targetMusic: {
      melody: 'C3-4;E3-4;D3-4;E3-4;F3-8;C4-4;E4-4;D4-4;E4-4;C4-8;C3-4;E3-4;D3-4;E3-4;F3-8;C4-4;E4-4;D4-4;E4-4;C4-8'
    },
    htmlInstr: '',
    idealBlocks: 11,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="a`J`H[Ap}%$[f]Cvi7kQ" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="B{|dF9Zt|x~hR3?Ae:dr"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="ye)t2mKJRYgU[p2I7.pI"><field name="NOTE">C</field><field name="DURATION">4</field><next><block type="play_note" id="[X`|dIT/!Vm98(b/Sst:"><field name="NOTE">E</field><field name="DURATION">4</field><next><block type="play_note" id="LPynO512M3%Z_2]A0hRk"><field name="NOTE">D</field><field name="DURATION">4</field><next><block type="play_note" id="i2E;EpoJz~|9:6:(_oDR"><field name="NOTE">E</field><field name="DURATION">4</field><next><block type="if_music_tone" id="O8r#2uIhSD56oAg*[%I0"><field name="TONE">3</field><statement name="DO"><block type="play_note" id="Q,5n}s%b6A/Df5i@S[--"><field name="NOTE">F</field><field name="DURATION">8</field><next><block type="change_tone" id="ymaekGaJN1H5#C/SX6kV"><field name="TONE">4</field></block></next></block></statement><statement name="ELSE"><block type="play_note" id="{~6CniLBV]sYl%2-}05["><field name="NOTE">C</field><field name="DURATION">8</field><next><block type="change_tone" id="0_F/nwQC?d{/1GJ/?+kR"><field name="TONE">3</field></block></next></block></statement></block></next></block></next></block></next></block></next></block></statement></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:27',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_iteration_else'],
    targetMusic: {
      melody: 'E3-2;E3-2;C3-2;C3-2;G3-2;G3-2;C3-2;C3-2;E3-2;E3-2;C3-2;C3-2;G3-2;G3-2;C3-2;C3-2'
    },
    htmlInstr: 'debug',
    idealBlocks: 9,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="l/!Eg4j)v^FuC[0kb`X~" deletable="false" movable="false" x="0" y="10"><next><block type="music_repeat" id="OYzt;)97ChI!:lws[o8A"><field name="TIMES">4</field><statement name="DO"><block type="if_music_iteration_else" id="KF!OMDN9yI~Nx/8uz$Yi"><field name="REPETITION">even</field><statement name="DO"><block type="play_note" id="e^ht`*~bj!et1F[V6Mk/"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_note" id="t]5:13x0SWUR8k8W/~tT"><field name="NOTE">G</field><field name="DURATION">2</field></block></next></block></statement><statement name="ELSE"><block type="play_note" id=";vSf7BMgobN.6^0?x1?T"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="br;52|$z{tT#Q=bn[LW7"><field name="NOTE">E</field><field name="DURATION">2</field></block></next></block></statement><next><block type="play_note" id="{/WNa}Agi.r_Js[_QTMD"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="#m#$kzhP,]:(]EGIw{lV"><field name="NOTE">C</field><field name="DURATION">2</field></block></next></block></next></block></statement></block></next></block></xml>',
    defaultCode: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="l/!Eg4j)v^FuC[0kb`X~" deletable="false" movable="false" x="0" y="10"><next><block type="music_repeat" id="OYzt;)97ChI!:lws[o8A"><field name="TIMES">4</field><statement name="DO"><block type="if_music_iteration_else" id="KF!OMDN9yI~Nx/8uz$Yi"><field name="REPETITION">even</field><statement name="THEN"><block type="play_note" id="IRZjdhK*ca`Ar|Hn)pP$"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="V1(f8*/LMQAL,^,UpvM*"><field name="NOTE">E</field><field name="DURATION">2</field></block></next></block></statement><statement name="ELSE"><block type="play_note" id="KoMi=g0hhR-E8A,u`y1m"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_note" id="g+7kloA;Wxf}[ji];8bB"><field name="NOTE">G</field><field name="DURATION">2</field></block></next></block></statement><next><block type="play_note" id="{/WNa}Agi.r_Js[_QTMD"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="#m#$kzhP,]:(]EGIw{lV"><field name="NOTE">C</field><field name="DURATION">2</field></block></next></block></next></block></statement></block></next></block></xml>'
  },
  {
    url: 'blocklyMusic:28',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_iteration_else'],
    targetMusic: {
      melody: 'D3-2;R-2;D3-2;R-2;D3-2;R-2;G3-2;D4-2;R-2;D4-2;R-2;D4-2;R-2;A3-2;D3-2;R-2;D3-2;R-2;D3-2;R-2;G3-2;D4-2;R-2;D4-2;R-2;D4-2;R-2;A3-2'
    },
    htmlInstr: '',
    idealBlocks: 10,
    oprimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="T{p#eRAsQ65#BF=$F$,c" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="eKat*04Jb8%l~fNtRIEA"><field name="TIMES">4</field><statement name="DO"><block type="music_repeat" id="F#-Gp`9?Lh:5z?`]@l5B"><field name="TIMES">3</field><statement name="DO"><block type="play_note" id="2=rH+h+H1~,/LtZzb]5~"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_rest" id="fk/fO,~s^k9:~gGna:bw"><field name="DURATION">2</field></block></next></block></statement><next><block type="if_music_iteration_else" id="|FK=_1S4xD6D/6%NN^[["><field name="REPETITION">odd</field><statement name="DO"><block type="play_note" id="CYHIKbAB[UlXoU!*c6=q"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="change_tone" id="xaA_Hp6tSaBij%NZBX,o"><field name="TONE">4</field></block></next></block></statement><statement name="ELSE"><block type="change_tone" id="#1C$NO6w@s0jFVJ8Q8[0"><field name="TONE">3</field><next><block type="play_note" id="A0z^5S38]s?QRKcn-TP5"><field name="NOTE">A</field><field name="DURATION">2</field></block></next></block></statement></block></next></block></statement></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:29',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_tone', 'if_music_iteration'],
    targetMusic: {
      melody: 'F3-2;G3-2;F3-2;G3-2;F3-2;A#3-2;A3-2;G3-2;F3-2;G3-2;F3-2;G3-2;F3-2;A#3-2;A3-2;G3-2'
    },
    htmlInstr: '',
    idealBlocks: 8,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="Rd1t[`2--Y!gDg(iF)9i" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="xK7J|..RBAbUx;77-eOk"><field name="TIMES">2</field><statement name="DO"><block type="music_repeat" id="c=-H(a0/`:FyJ*%?pb:c"><field name="TIMES">3</field><statement name="DO"><block type="play_note" id="=Bc3h?lXf4Yi1mW.M!FE"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="if_music_iteration" id=":w,7eN()fz]K{OWtx=,B"><field name="REPETITION">last</field><statement name="DO"><block type="play_note" id="VC)M_R@SXRl4zSkey.0f"><field name="NOTE">A#</field><field name="DURATION">2</field><next><block type="play_note" id="|0F#UU9nZt,0k%-xuze!"><field name="NOTE">A</field><field name="DURATION">2</field></block></next></block></statement><next><block type="play_note" id="PQHc|QY{[e|6*YMvaQEc"><field name="NOTE">G</field><field name="DURATION">2</field></block></next></block></next></block></statement></block></statement></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:30',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_tone', 'if_music_iteration_else'],
    targetMusic: {
      melody: 'A3-1;R-1;A3-1;R-1;A3-1;R-1;A3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;A4-1;R-1;A4-1;R-1;A4-1;R-1;A4-1;R-1;D3-1;R-1;D3-1;R-1;D3-1;R-1;D3-1;R-1'
    },
    htmlInstr: '',
    idealBlocks: 14,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="R[LZT~_P^s5x*DYN]nmR" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="cVpqj`eD6YbLpe!y7$5D"><field name="TIMES">2</field><statement name="DO"><block type="music_repeat" id="hrIOs;h^CXd4s%W[,b7?"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="1iuqjtz(7HTNtI+pc0%l"><field name="NOTE">A</field><field name="DURATION">1</field><next><block type="play_rest" id="/`|u1^9)PjOQ*T%o~5I$"><field name="DURATION">1</field></block></next></block></statement><next><block type="if_music_iteration_else" id="~EhT33%5s50HFAo~O)Jb"><field name="REPETITION">first</field><statement name="DO"><block type="music_repeat" id="JyYHA=6thqqspITd@Co?"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="@xd[T^lR^Ben)xvEht%E"><field name="NOTE">F</field><field name="DURATION">1</field><next><block type="play_rest" id=",jC;;v__Z63BTmT{+mul"><field name="DURATION">1</field></block></next></block></statement><next><block type="change_tone" id="q*iX~%n;=0=egv#:OO4["><field name="TONE">4</field></block></next></block></statement><statement name="ELSE"><block type="change_tone" id="_oH2.qD6KptZxT?3qdu;"><field name="TONE">3</field><next><block type="music_repeat" id=".(*MaC@^5tNnj2z/BK1P"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="$911;@HqIIaU@`ox7,q@"><field name="NOTE">D</field><field name="DURATION">1</field><next><block type="play_rest" id="W)+(q]O%.36ei}b3O2BW"><field name="DURATION">1</field></block></next></block></statement></block></next></block></statement></block></next></block></statement></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:31',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_tone', 'if_music_iteration_else'],
    targetMusic: {
      melody: 'C3-2;D3-2;E3-2;F3-2;C3-2;D3-2;E3-1;D3-1;E3-1;D3-1;C3-2;D3-2;E3-2;F3-2;C3-2;D3-2;E3-1;D3-1;E3-1;D3-1'
    },
    htmlInstr: '',
    idealBlocks: 10,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="4aF@gj}7@Y=A~^1Kkqxc" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="j](yzP%=QzN|=[%`DZC_"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="+r/(N/t^+7dC+#LT[yyf"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="bw!KNP0d;{J5+1#PHr)q"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="if_music_iteration_else" id="Ju]ok$t+gau2OA#|:vW1"><field name="REPETITION">odd</field><statement name="DO"><block type="play_note" id="ZW8XffC)hNkh-#X.9/[h"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="syRP9_sD`d]{t.=N?-te"><field name="NOTE">F</field><field name="DURATION">2</field></block></next></block></statement><statement name="ELSE"><block type="music_repeat" id="+=d{pa`A*e16wsPdfY29"><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="UZ/Kthg5A3R#!CiY|TKV"><field name="NOTE">E</field><field name="DURATION">1</field><next><block type="play_note" id="$(:b/XS59+I]aD[YnFA7"><field name="NOTE">D</field><field name="DURATION">1</field></block></next></block></statement></block></statement></block></next></block></next></block></statement></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:32',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_tone', 'if_music_iteration_else'],
    targetMusic: {
      melody: 'D4-1;R-1;D4-1;R-1;D4-1;R-1;D4-1;R-1;D4-1;R-1;D4-1;R-1;D4-1;R-1;D4-1;R-1;D4-2;F4-2;D4-2;C4-2;D4-2;G4-2;D4-2;C4-2;C4-1;R-1;C4-1;R-1;C4-1;R-1;C4-1;R-1;C4-1;R-1;C4-1;R-1;C4-1;R-1;C4-1;R-1;D4-2;F4-2;D4-2;C4-2;D4-2;G4-2;D4-2;C4-2'
    },
    htmlInstr: '',
    idealBlocks: 17,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="CbY@G9t6OhRV,qJj$L_G" deletable="false" movable="false" x="10" y="10"><next><block type="change_tone" id="tScrzSvmdnpYfxZg$B}x"><field name="TONE">4</field><next><block type="music_repeat" id="Qjcdn@oL%@`rs#]x%g}c"><field name="TIMES">2</field><statement name="DO"><block type="if_music_iteration_else" id="4^3WGqw@dVR/f:N{GRfF"><field name="REPETITION">first</field><statement name="DO"><block type="music_repeat" id="ytkVk3;oHL@eJ~1t8R($"><field name="TIMES">8</field><statement name="DO"><block type="play_note" id="s-Hk=#et|q=@k6Nm7,x_"><field name="NOTE">D</field><field name="DURATION">1</field><next><block type="play_rest" id=":YF[Q{q|+MS)0bd^@M`e"><field name="DURATION">1</field></block></next></block></statement></block></statement><statement name="ELSE"><block type="music_repeat" id="ziu__FHTj^l0WdP`}ST?"><field name="TIMES">8</field><statement name="DO"><block type="play_note" id="ex].;/q!WjlQtGV;Rftx"><field name="NOTE">C</field><field name="DURATION">1</field><next><block type="play_rest" id="dMnCmP]CRlDDp%u+fKLa"><field name="DURATION">1</field></block></next></block></statement></block></statement><next><block type="music_repeat" id="au5RLm26WABAh7_{t[c."><field name="TIMES">2</field><statement name="DO"><block type="play_note" id="UOznvlu=;?Vj1#NXN7.O"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="if_music_iteration_else" id="lCJ=ds%Ouj+;j,U%+yzj"><field name="REPETITION">first</field><statement name="DO"><block type="play_note" id="#D[PuZv0i_v/qu!Z(eqt"><field name="NOTE">F</field><field name="DURATION">2</field></block></statement><statement name="ELSE"><block type="play_note" id="@QlV]2IS`(`2kVKi2|Zr"><field name="NOTE">G</field><field name="DURATION">2</field></block></statement><next><block type="play_note" id=":QZKABc;@mkpi{y4`,f:"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="9=_nrmj+fC.|~l2;yb=)"><field name="NOTE">C</field><field name="DURATION">2</field></block></next></block></next></block></next></block></statement></block></next></block></statement></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:33',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_iteration'],
    targetMusic: {
      melody: 'C3-2;E3-2;C3-2;E3-2;F3-2;E3-2;C3-2;E3-2;C3-2;E3-2;F3-2;E3-2'
    },
    htmlInstr: '',
    idealBlocks: 7,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="4]%f@35nn1n[(*0)S`Z*" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="bqzU,52VO#_o(yT4e0]L"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="q,m:7(4s8n@f?N?ML}V:"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="_JhR%uUGXX]cz]A{?ZQ1"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="if_music_iteration" id="?}/55^{9{y{+VtBq}(:B"><field name="REPETITION">even</field><statement name="DO"><block type="play_note" id="gR{M5r,(RRp)WSE.Z^6P"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="8r*:2GcrOru;if)1`c7)"><field name="NOTE">E</field><field name="DURATION">2</field></block></next></block></statement></block></next></block></next></block></statement></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:34',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_iteration'],
    targetMusic: {
      melody: 'C4-2;E4-2;C4-2;E4-2;F4-2;G4-2;C4-2;E4-2;C4-2;E4-2;F4-2;G4-2'
    },
    htmlInstr: '',
    idealBlocks: 8,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="EGa2q*_RwDplJXm![@K@" deletable="false" movable="false" x="10" y="10"><next><block type="change_tone" id="enX:W_SQvX~SOD.QMg4k"><field name="TONE">4</field><next><block type="music_repeat" id="9#|yJCW470?`{Wxc=HnU"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="}p3Of:.P~.QzqFtiKlZZ"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="N3XOS]YUXc@ksx|XC.!S"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="if_music_iteration" id="W=8c30Lj7PB7Hw?5TF[x"><field name="REPETITION">even</field><statement name="DO"><block type="play_note" id="S40X/DJq?[)U_z#i8r]`"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="Ss[:?CjZ*t!l%je?G@J;"><field name="NOTE">G</field><field name="DURATION">2</field></block></next></block></statement></block></next></block></next></block></statement></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:35',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_iteration'],
    targetMusic: {
      melody: 'G3-2;E3-2;C3-2;G3-2;E3-2;C3-2;G3-2;E3-2;C3-2;G3-2;A3-2;G3-2;E3-2;C3-2'
    },
    htmlInstr: '',
    idealBlocks: 8,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="sxqdBED%dG/:@594DPBw" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id=")k1g$a_[?[?/|S22hH87"><field name="TIMES">4</field><statement name="DO"><block type="if_music_iteration" id="e}S]zzbGO,Xe)r*u{puM"><field name="REPETITION">last</field><statement name="DO"><block type="play_note" id="fr]G:kD2k@D(/otx?Mgr"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_note" id="0x,:l?I568*x8;.I{V_l"><field name="NOTE">A</field><field name="DURATION">2</field></block></next></block></statement><next><block type="play_note" id="e4YJLR#Gbx,UsPNec]uT"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_note" id="+?nob~jY|Hud/VO;fwAl"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="k/g7J9Rv}MaZ]`b!i-{P"><field name="NOTE">C</field><field name="DURATION">2</field></block></next></block></next></block></next></block></statement></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:36',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_iteration'],
    targetMusic: {
      melody: 'E3-2;G3-2;A3-2;E3-2;G3-2;E3-2;G3-2;A3-2;E3-2;G3-2'
    },
    htmlInstr: '',
    idealBlocks: 6,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="rxgvh;vaa`V[|5r2[hnh" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="VYv#cBx7ea+q7}1glgfR"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="QL{^42?.IkF7G%@)8%5L"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="J;kczLH`2Og3Wg$G:fbm"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="if_music_iteration" id="/agPxG.(vfqR;BZKJB}r"><field name="REPETITION">odd</field><statement name="DO"><block type="play_note" id="5%X?Sf]${^#gJ=SSLiLt"><field name="NOTE">A</field><field name="DURATION">2</field></block></statement></block></next></block></next></block></statement></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:37',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_iteration'],
    targetMusic: {
      melody: 'D4-2;E4-2;G4-2;D4-2;E4-2;D4-2;E4-2;D4-2;E4-2;F4-4'
    },
    htmlInstr: '',
    idealBlocks: 8,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="[E85Z8RdYcf_U8lagaV[" deletable="false" movable="false" x="10" y="10"><next><block type="change_tone" id="DNXS)lZ=7kVDN$4@m!8v"><field name="TONE">4</field><next><block type="music_repeat" id="j5J}A,.z!09;[E_%0,MA"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="/H(U{y1m$xIV3bNR|9=E"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="p|1-Ndq-[@0II/cyLU=3"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="if_music_iteration" id="pc|3=+{~?_e25rh2o-Y6"><field name="REPETITION">first</field><statement name="DO"><block type="play_note" id="nc6BB]w)|!f1o3mf!%eu"><field name="NOTE">G</field><field name="DURATION">2</field></block></statement></block></next></block></next></block></statement><next><block type="play_note" id="aflanHCnyaXMBsOkX4(r"><field name="NOTE">F</field><field name="DURATION">4</field></block></next></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:38',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_iteration'],
    targetMusic: {
      melody: 'C3-2;E3-2;D3-2;C3-2;E3-2;D3-2;C3-2;E3-2;D3-2;C3-2;E3-2;D3-2'
    },
    htmlInstr: '',
    idealBlocks: 3,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="{3_TwSuN[WdY?#Q$zUPb" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="_]/vp5rnW}!]]fG-vfI9"><field name="TIMES">4</field><statement name="DO"><block type="music_procedure_call" id="GD()gOA9QE9*^|pVo{ke" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa</field></block></statement></block></next></block><block type="music_procedure_define" id="8KT4J;Gy^$fjW?TC,8E`" deletable="false" editable="false" x="11" y="143"><field name="PROCEDURE_NAME">strofa</field><statement name="DO"><block type="play_note" id="x-lvOK93q_i2bwVR}VZF" deletable="false" editable="false"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="[Oi1V@UHPOr=4A[iuWAS" deletable="false" editable="false"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="u._?gu`#4*F@uE6qDGkA" deletable="false" editable="false"><field name="NOTE">D</field><field name="DURATION">2</field></block></next></block></next></block></statement></block></xml>',
    defaultCode: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="{3_TwSuN[WdY?#Q$zUPb" deletable="false" movable="false" x="10" y="10"></block><block type="music_procedure_call" id="GD()gOA9QE9*^|pVo{ke" x="10" y="85" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa</field></block><block type="music_procedure_define" id="8KT4J;Gy^$fjW?TC,8E`" deletable="false" editable="false" x="86" y="250"><field name="PROCEDURE_NAME">strofa</field><statement name="DO"><block type="play_note" id="x-lvOK93q_i2bwVR}VZF" deletable="false" editable="false"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="[Oi1V@UHPOr=4A[iuWAS" deletable="false" editable="false"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="u._?gu`#4*F@uE6qDGkA" deletable="false" editable="false"><field name="NOTE">D</field><field name="DURATION">2</field></block></next></block></next></block></statement></block></xml>'
  },
  {
    url: 'blocklyMusic:39',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_iteration'],
    targetMusic: {
      melody: 'C3-2;D3-2;E3-2;C3-2;C3-2;D3-2;E3-2;C3-2;E3-2;F3-2;G3-4;E3-2;F3-2;G3-4'
    },
    htmlInstr: '',
    idealBlocks: 5,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="{3_TwSuN[WdY?#Q$zUPb" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="ft|i^V-Fh*1Vy(ixI6Ej"><field name="TIMES">2</field><statement name="DO"><block type="music_procedure_call" id="rzoX`i?S95`KQD4E~1JQ" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa1</field></block></statement><next><block type="music_repeat" id="pA62p!^XWkf_phDVTFa:"><field name="TIMES">2</field><statement name="DO"><block type="music_procedure_call" id="CI0qrHzrOd;R*K7-AdQW" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa2</field></block></statement></block></next></block></next></block><block type="music_procedure_define" id="]41tWZ,gs^_D4IYqisFN" deletable="false" editable="false" x="12" y="216"><field name="PROCEDURE_NAME">strofa1</field><statement name="DO"><block type="play_note" id="[bI}jDyi%paE?nss5gsb" deletable="false" editable="false"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="ORlz4Xy6eq9:W]yd8u8f" deletable="false" editable="false"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="6Xx~I+#z7X]t84j_1dH|" deletable="false" editable="false"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="$^.McJ(FF7pyg3C+h[mD" deletable="false" editable="false"><field name="NOTE">C</field><field name="DURATION">2</field></block></next></block></next></block></next></block></statement></block><block type="music_procedure_define" id="%:qVh?]JSZOg/,dsEZ,U" deletable="false" editable="false" x="13" y="389"><field name="PROCEDURE_NAME">strofa2</field><statement name="DO"><block type="play_note" id="E[iq0|hgxb#le4,;~gxb" deletable="false" editable="false"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="n8i|MguK+#`[Segp(*61" deletable="false" editable="false"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="A|a~jE*89Yd5uMZ)P^mp" deletable="false" editable="false"><field name="NOTE">G</field><field name="DURATION">4</field></block></next></block></next></block></statement></block></xml>',
    defaultCode: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="{3_TwSuN[WdY?#Q$zUPb" deletable="false" movable="false" x="10" y="10"></block><block type="music_procedure_call" id="rzoX`i?S95`KQD4E~1JQ" x="24" y="62" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa1</field></block><block type="music_procedure_call" id="CI0qrHzrOd;R*K7-AdQW" x="24" y="123" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa2</field></block><block type="music_procedure_define" id="]41tWZ,gs^_D4IYqisFN" x="35" y="258" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa1</field><statement name="DO"><block type="play_note" id="[bI}jDyi%paE?nss5gsb" deletable="false" editable="false"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="ORlz4Xy6eq9:W]yd8u8f" deletable="false" editable="false"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="6Xx~I+#z7X]t84j_1dH|" deletable="false" editable="false"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="$^.McJ(FF7pyg3C+h[mD" deletable="false" editable="false"><field name="NOTE">C</field><field name="DURATION">2</field></block></next></block></next></block></next></block></statement></block><block type="music_procedure_define" id="%:qVh?]JSZOg/,dsEZ,U" x="31" y="438" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa2</field><statement name="DO"><block type="play_note" id="E[iq0|hgxb#le4,;~gxb" deletable="false" editable="false"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="n8i|MguK+#`[Segp(*61" deletable="false" editable="false"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="A|a~jE*89Yd5uMZ)P^mp" deletable="false" editable="false"><field name="NOTE">G</field><field name="DURATION">4</field></block></next></block></next></block></statement></block></xml>'
  },
  {
    url: 'blocklyMusic:40',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_iteration'],
    targetMusic: {
      melody: 'C3-2;E3-2;D3-2;C3-2;E3-2;F3-4;C3-2;E3-2;D3-2;C3-2;E3-2;G3-4;C3-2;E3-2;D3-2;C3-2;E3-2;A3-4;C3-2;E3-2;D3-2;C3-2;E3-2;C3-8'
    },
    htmlInstr: '',
    idealBlocks: 9,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="K$N~ma;eS8tqe^mnsdTp" deletable="false" movable="false" x="10" y="10"><next><block type="music_procedure_call" id="ssTcq)x$]oaMOeIY_(_E" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa</field><next><block type="play_note" id="1#)TwdO9EKF}x~AoIO9s" deletable="false" editable="false"><field name="NOTE">F</field><field name="DURATION">4</field><next><block type="music_procedure_call" id="cdgx=`,SsASb}y6ZPZXk" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa</field><next><block type="play_note" id="o~S/4x/{tq3g)1h)gw!}" deletable="false" editable="false"><field name="NOTE">G</field><field name="DURATION">4</field><next><block type="music_procedure_call" id="|F8tXAa8TH#v[9$+bdcH" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa</field><next><block type="play_note" id="}-qd6tq!rN/p%SDbbUZs" deletable="false" editable="false"><field name="NOTE">A</field><field name="DURATION">4</field><next><block type="music_procedure_call" id="#CbHZw},bu2Ci{Ii,wrN" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa</field><next><block type="play_note" id="!vh^PU`IiX4u]tZcgb)}" deletable="false" editable="false"><field name="NOTE">C</field><field name="DURATION">8</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><block type="music_procedure_define" id="ywF92[_jr.oCZ{D}`!#]" deletable="false" editable="false" x="13" y="279"><field name="PROCEDURE_NAME">strofa</field><statement name="DO"><block type="play_note" id="EE4UtNcnY%DU|1;LRQ`x"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id=".-:xtqdemK8nS(LIZPR;"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id=",27e1S#)i(G2%Mf7eRCB"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id=")FS.K.1rQ4(%[E_l=M-."><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="7|LGvkE=}Mc8lnI/Rjj,"><field name="NOTE">E</field><field name="DURATION">2</field></block></next></block></next></block></next></block></next></block></statement></block></xml>',
    defaultCode: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="K$N~ma;eS8tqe^mnsdTp" deletable="false" movable="false" x="10" y="10"><next><block type="music_procedure_call" id="ssTcq)x$]oaMOeIY_(_E" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa</field><next><block type="play_note" id="1#)TwdO9EKF}x~AoIO9s" deletable="false" editable="false"><field name="NOTE">F</field><field name="DURATION">4</field><next><block type="music_procedure_call" id="cdgx=`,SsASb}y6ZPZXk" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa</field><next><block type="play_note" id="o~S/4x/{tq3g)1h)gw!}" deletable="false" editable="false"><field name="NOTE">G</field><field name="DURATION">4</field><next><block type="music_procedure_call" id="|F8tXAa8TH#v[9$+bdcH" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa</field><next><block type="play_note" id="}-qd6tq!rN/p%SDbbUZs" deletable="false" editable="false"><field name="NOTE">A</field><field name="DURATION">4</field><next><block type="music_procedure_call" id="#CbHZw},bu2Ci{Ii,wrN" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa</field><next><block type="play_note" id="!vh^PU`IiX4u]tZcgb)}" deletable="false" editable="false"><field name="NOTE">C</field><field name="DURATION">8</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><block type="music_procedure_define" id="ywF92[_jr.oCZ{D}`!#]" x="71" y="364" deletable="false" editable="false"><field name="PROCEDURE_NAME">strofa</field><statement name="DO"></statement></block></xml>'
  },
  {
    url: 'blocklyMusic:41',
    instructions: ['play_note', 'play_rest'],
    targetMusic: {
      melody: 'D3-4;F3-4;R-4;G3-4;A3-4;R-4;A#3-2;A3-4;G3-4;R-4;E3-4;C3-8'
    },
    htmlInstr: '',
    idealBlocks: 13,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="M9owH++cC2Fji?F?COL~" deletable="false" movable="false" x="10" y="10"><next><block type="play_note" id="_J#!Q,YE3@lll9Su(KJg"><field name="NOTE">D</field><field name="DURATION">4</field><next><block type="play_note" id="NBrT_p[_3A^k05dAf=k("><field name="NOTE">F</field><field name="DURATION">4</field><next><block type="play_rest" id="ju6I$2v|K,Uu/+sI;q_V"><field name="DURATION">4</field><next><block type="play_note" id="}#LKL$mi2ki}L)-l5[sd"><field name="NOTE">G</field><field name="DURATION">4</field><next><block type="play_note" id="n_aeWfM3[GzPCLCw=S{t"><field name="NOTE">A</field><field name="DURATION">4</field><next><block type="play_rest" id="]fiy.5^3)[^O|]wU,yvr"><field name="DURATION">4</field><next><block type="play_note" id="[(KD@/:.WP.2|*=y5dv$"><field name="NOTE">A#</field><field name="DURATION">2</field><next><block type="play_note" id="izx~rADfKS$0I,-Al]?l"><field name="NOTE">A</field><field name="DURATION">4</field><next><block type="play_note" id="Tar44nXjC;uZtyf{Ezp("><field name="NOTE">G</field><field name="DURATION">4</field><next><block type="play_rest" id="6-*%w)58w+Y`m@(+)HL."><field name="DURATION">4</field><next><block type="play_note" id="/}co;9h}R{3r`XbGkGyq"><field name="NOTE">E</field><field name="DURATION">4</field><next><block type="play_note" id="0j8DGl1Gf_qubId3G%e/"><field name="NOTE">C</field><field name="DURATION">8</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:42',
    instructions: ['play_note', 'play_rest', 'change_tone'],
    targetMusic: {
      melody: 'C4-4;R-4;C4-4;A#3-4;A3-4;G3-4;R-4;E3-4;C3-8'
    },
    htmlInstr: '',
    idealBlocks: 12,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="(YsUtLe)6UCCgh~1WzY8" deletable="false" movable="false" x="10" y="10"><next><block type="change_tone" id="1rd7uZg]~@_tPow%Ofs]"><field name="TONE">4</field><next><block type="play_note" id="E`KeoQ~~bjW*cTh1ed15"><field name="NOTE">C</field><field name="DURATION">4</field><next><block type="play_rest" id="/r!vm^ob44m4v~2]GV4F"><field name="DURATION">4</field><next><block type="play_note" id="X/J2:[AL{dx`VZJ52O-8"><field name="NOTE">C</field><field name="DURATION">4</field><next><block type="change_tone" id="6;1xy5rB8[IM:m0=p49="><field name="TONE">3</field><next><block type="play_note" id="f+MSEbk]^BmX+(BP)k{-"><field name="NOTE">A#</field><field name="DURATION">4</field><next><block type="play_note" id="Nmy/0{0L,FD0.Z}+jHbU"><field name="NOTE">A</field><field name="DURATION">4</field><next><block type="play_note" id="xt`mb)L=KWcrVIX[0O{p"><field name="NOTE">G</field><field name="DURATION">4</field><next><block type="play_rest" id="fe.B}W/8JAoLr)_vR.{z"><field name="DURATION">4</field><next><block type="play_note" id="Gi!N7n4lZ`eNpOd#0ai#"><field name="NOTE">E</field><field name="DURATION">4</field><next><block type="play_note" id="/$%^g-9_/j$~Q%G3u29Z"><field name="NOTE">C</field><field name="DURATION">8</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:43',
    instructions: ['play_note', 'play_rest', 'music_repeat'],
    targetMusic: {
      melody: 'C3-2;E3-2;G3-2;C3-2;E3-2;G3-2;C3-2;E3-2;G3-2;D3-2;F#3-2;A3-2;D3-2;F#3-2;A3-2;D3-2;F#3-2;A3-2'
    },
    htmlInstr: '',
    idealBlocks: 9,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="k-Tnp~b=G3YEg:ktFNBD" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="qDw9NKPHLJ(ADX%y_o;)"><field name="TIMES">3</field><statement name="DO"><block type="play_note" id="iU#OYJ::),4KSR0S*%-G"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="*hTzMx90V-W?#fqawdgJ"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="~Sjj(FvP(`.G9)wwi_IH"><field name="NOTE">G</field><field name="DURATION">2</field></block></next></block></next></block></statement><next><block type="music_repeat" id="82EzigOznE6^5{zR.H$C"><field name="TIMES">3</field><statement name="DO"><block type="play_note" id="pwMhQHJal!aw;CC/+xTp"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="[xh=B~h9yOO`dhD}p)k#"><field name="NOTE">F#</field><field name="DURATION">2</field><next><block type="play_note" id="$f(HU57hY0u/ynaK,}Tl"><field name="NOTE">A</field><field name="DURATION">2</field></block></next></block></next></block></statement></block></next></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:44',
    instructions: ['play_note', 'play_rest', 'music_repeat'],
    targetMusic: {
      melody: 'G3-2;R-1;G3-2;R-1;G3-2;R-1;G3-2;R-1;C3-2;R-1;C3-2;R-1;C3-2;R-1;C3-2;R-1;G3-2;R-1;G3-2;R-1;G3-2;R-1;G3-2;R-1;C3-2;R-1;C3-2;R-1;C3-2;R-1;C3-2;R-1'
    },
    htmlInstr: '',
    idealBlocks: 8,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="i_YCrg*].ic`#5y}i7Jz" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="kFtEG]e*SKD:V(9;;Z~s"><field name="TIMES">2</field><statement name="DO"><block type="music_repeat" id="3$h!3hHJ@+lw#gUA|-EY"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="UPY$MM/6S_AQUuijLI~@"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_rest" id="WBh%cnY@d:Y^x8TciQ3j"><field name="DURATION">1</field></block></next></block></statement><next><block type="music_repeat" id="p-0zn5z$!)#1s6S#;Kt2"><field name="TIMES">4</field><statement name="DO"><block type="play_note" id="05G+Z;$XEC#,BG;o.yeE"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_rest" id="dqSKP}Dynv0U~SMYlGiY"><field name="DURATION">1</field></block></next></block></statement></block></next></block></statement></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:45',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat'],
    targetMusic: {
      melody: 'A3-1;B3-1;D4-1;A3-1;B3-1;D4-1;A3-1;B3-1;D4-1;A3-1;B3-1;D4-1'
    },
    htmlInstr: '',
    idealBlocks: 7,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="ma}I.pt6%wV-57FN^=U]" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="1jQ+7c(JO6gN$+$V6%A?"><field name="TIMES">4</field><statement name="DO"><block type="change_tone" id="VMSP[Wpz#C`%Z05s]T`z"><field name="TONE">3</field><next><block type="play_note" id="1_SXiML7Z;r+8}LK.[nG"><field name="NOTE">A</field><field name="DURATION">1</field><next><block type="play_note" id="$PigpH/oZ#pf;]JQZc6Y"><field name="NOTE">B</field><field name="DURATION">1</field><next><block type="change_tone" id="*Ukp,m{s=_b:bgJ{HV?A"><field name="TONE">4</field><next><block type="play_note" id="^yNQjX8vEq)Gzp~:_t-X"><field name="NOTE">D</field><field name="DURATION">1</field></block></next></block></next></block></next></block></next></block></statement></block></next></block></xml>',
    defaultCode: baseBlock
  },
  {
    url: 'blocklyMusic:46',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat', 'if_music_iteration_else'],
    targetMusic: {
      melody: 'C4-2;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;A3-2;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;A3-2;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;A3-2;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1;F3-1;R-1'
    },
    htmlInstr: 'debug',
    idealBlocks: 10,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="{xa[@,2[%qKIE_N,SG[8" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="d51sfpn^ulH^{bk$%`Vj"><field name="TIMES">4</field><statement name="DO"><block type="if_music_iteration_else" id="^#JLLpzII)#g+R2^fDhA"><field name="REPETITION">first</field><statement name="DO"><block type="change_tone" id="4aLFndC{C1txDm7:|uVU"><field name="TONE">4</field><next><block type="play_note" id="%JJe$j-j)42Uqv$.,}YP"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="change_tone" id="7rtW(fSFOh(z42MCeI?y"><field name="TONE">3</field></block></next></block></next></block></statement><statement name="ELSE"><block type="play_note" id="*.uWA=^.^,1+(.p@H],2"><field name="NOTE">A</field><field name="DURATION">2</field></block></statement><next><block type="music_repeat" id="_R|jLwEz04Z+2W?HEV3K"><field name="TIMES">7</field><statement name="DO"><block type="play_note" id="L#K7=!]2swa|v@|N;rF|"><field name="NOTE">F</field><field name="DURATION">1</field><next><block type="play_rest" id="mH/oqk+-VaD?BFpziaK."><field name="DURATION">1</field></block></next></block></statement></block></next></block></statement></block></next></block></xml>',
    defaultCode: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="{xa[@,2[%qKIE_N,SG[8" deletable="false" movable="false" x="10" y="10"><next><block type="music_repeat" id="d51sfpn^ulH^{bk$%`Vj"><field name="TIMES">4</field><statement name="DO"><block type="if_music_iteration_else" id="^#JLLpzII)#g+R2^fDhA"><field name="REPETITION">last</field><statement name="DO"><block type="change_tone" id="4aLFndC{C1txDm7:|uVU"><field name="TONE">4</field><next><block type="play_note" id="%JJe$j-j)42Uqv$.,}YP"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="change_tone" id="7rtW(fSFOh(z42MCeI?y"><field name="TONE">3</field></block></next></block></next></block></statement><statement name="ELSE"><block type="play_note" id="*.uWA=^.^,1+(.p@H],2"><field name="NOTE">A</field><field name="DURATION">2</field></block></statement><next><block type="music_repeat" id="_R|jLwEz04Z+2W?HEV3K"><field name="TIMES">7</field><statement name="DO"><block type="play_note" id="L#K7=!]2swa|v@|N;rF|"><field name="NOTE">F</field><field name="DURATION">1</field><next><block type="play_rest" id="mH/oqk+-VaD?BFpziaK."><field name="DURATION">1</field></block></next></block></statement></block></next></block></statement></block></next></block></xml>'
  },
  {
    url: 'blocklyMusic:47',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat'],
    targetMusic: {
      melody: 'C4-2;D4-1;E4-2;D4-1;C4-2;G4-4;C4-2;D4-1;E4-2;D4-1;C4-2;A3-4;F4-2;E4-4'
    },
    htmlInstr: 'debug',
    idealBlocks: 10,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="C*~@P!3!nO(zjcrC)05H" deletable="false" movable="false" x="10" y="10"><next><block type="change_tone" id=",xvNmII:aS@r[mj.y66G"><field name="TONE">4</field><next><block type="music_procedure_call" id="qaklbb*UIJ})jKBUX8j:" editable="false"><field name="PROCEDURE_NAME">strofa</field><next><block type="play_note" id="yHB:0wGdh^FpQM5fxao}"><field name="NOTE">G</field><field name="DURATION">4</field><next><block type="music_procedure_call" id="aO)~D[Lv;g{yrU]J2q[e"><field name="PROCEDURE_NAME">strofa</field><next><block type="change_tone" id="k}wH)XvLNWO+n+@B_-+J"><field name="TONE">3</field><next><block type="play_note" id="))!3lUTqMhLAZWexP(6O"><field name="NOTE">A</field><field name="DURATION">4</field><next><block type="change_tone" id="M9)q;]c^Ez{A:Xgoeb5r"><field name="TONE">4</field><next><block type="play_note" id="2%z$CQdGbAr8rB1tPxG("><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="PVC/a=xNa6AWX@zypS!G"><field name="NOTE">E</field><field name="DURATION">4</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><block type="music_procedure_define" id="j6nfkK20],CdGQeN:1Qh" editable="false" x="9" y="310"><field name="PROCEDURE_NAME">strofa</field><statement name="DO"><block type="play_note" id="t.3p:=5.jSEu;Chwde#%"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="5DirP]919ZIa5X/P*V)X"><field name="NOTE">D</field><field name="DURATION">1</field><next><block type="play_note" id="xrz}Nd~Y9C{IN/_Q~MnQ"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="4ZgYsB3O3%OkO/G64?J-"><field name="NOTE">D</field><field name="DURATION">1</field><next><block type="play_note" id="4neR./7x;[g!J`lj5gg%"><field name="NOTE">C</field><field name="DURATION">2</field></block></next></block></next></block></next></block></next></block></statement></block></xml>',
    defaultCode: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="C*~@P!3!nO(zjcrC)05H" deletable="false" movable="false" x="10" y="10"><next><block type="change_tone" id=",xvNmII:aS@r[mj.y66G"><field name="TONE">4</field><next><block type="music_procedure_call" id="qaklbb*UIJ})jKBUX8j:" editable="false"><field name="PROCEDURE_NAME">strofa</field><next><block type="play_note" id="yHB:0wGdh^FpQM5fxao}"><field name="NOTE">G</field><field name="DURATION">4</field><next><block type="music_procedure_call" id="aO)~D[Lv;g{yrU]J2q[e"><field name="PROCEDURE_NAME">strofa</field><next><block type="change_tone" id="k}wH)XvLNWO+n+@B_-+J"><field name="TONE">3</field><next><block type="play_note" id="))!3lUTqMhLAZWexP(6O"><field name="NOTE">A</field><field name="DURATION">4</field><next><block type="change_tone" id="M9)q;]c^Ez{A:Xgoeb5r"><field name="TONE">4</field><next><block type="play_note" id="2%z$CQdGbAr8rB1tPxG("><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="PVC/a=xNa6AWX@zypS!G"><field name="NOTE">E</field><field name="DURATION">4</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><block type="music_procedure_define" id="j6nfkK20],CdGQeN:1Qh" x="19" y="325" editable="false"><field name="PROCEDURE_NAME">strofa</field><statement name="DO"><block type="play_note" id="t.3p:=5.jSEu;Chwde#%"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="5DirP]919ZIa5X/P*V)X"><field name="NOTE">D</field><field name="DURATION">1</field><next><block type="play_note" id="xrz}Nd~Y9C{IN/_Q~MnQ"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="4neR./7x;[g!J`lj5gg%"><field name="NOTE">C</field><field name="DURATION">2</field></block></next></block></next></block></next></block></statement></block></xml>'
  },
  {
    url: 'blocklyMusic:48',
    instructions: ['play_note', 'play_rest', 'change_tone', 'music_repeat'],
    targetMusic: {
      melody: 'C4-2;D4-2;E4-2;C3-2;E4-2;F4-2;E4-2;C3-2;G4-2;G4-2;A4-2;C3-2;E4-2;D4-2;C4-2;C3-2'
    },
    htmlInstr: '',
    idealBlocks: 18,
    optimalSolution: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="q#`1xYq8!]P/$riW((!0" deletable="false" movable="false" x="10" y="10"><next><block type="change_tone" id="{wYxe]H,p8SBLU?zMuH~"><field name="TONE">4</field><next><block type="play_note" id="8D_?HLep4yj:i.^Eq0Xa"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="play_note" id="gMW:UW`?NG}_x{y;+p#@"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="35ZbrJ1Z~``cOMQJKG]h"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="music_procedure_call" id="VKd]]aN.5[3)sH!iaHuQ" editable="false"><field name="PROCEDURE_NAME">DoBasso</field><next><block type="play_note" id="dBd1--6(;^XtH2W5cRMU"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="lVgTfqE4.:L0:H,pXQ1L"><field name="NOTE">F</field><field name="DURATION">2</field><next><block type="play_note" id="?g~I-SoU3ZQ@szF*r|f5"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="music_procedure_call" id="SrDfHXdW.pOjff[ylqqV" editable="false"><field name="PROCEDURE_NAME">DoBasso</field><next><block type="play_note" id="Spt^8#p*6VhM^`aE73Re"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_note" id="|-!@mr^ReW8Y=u7dLK]u"><field name="NOTE">G</field><field name="DURATION">2</field><next><block type="play_note" id="3?.:IM(]iNr#([SWA.mp"><field name="NOTE">A</field><field name="DURATION">2</field><next><block type="music_procedure_call" id="h/mGRtd)Q5b$lj06`9dR" editable="false"><field name="PROCEDURE_NAME">DoBasso</field><next><block type="play_note" id="p*h=/ggEb2KBHA~D[)gN"><field name="NOTE">E</field><field name="DURATION">2</field><next><block type="play_note" id="afODZoSF~6C?!Qv)/Ijz"><field name="NOTE">D</field><field name="DURATION">2</field><next><block type="play_note" id="|G}%o3:dsGB*O4fwj?|J"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="music_procedure_call" id="bFO+#Q^9v7W).3To]}nn" editable="false"><field name="PROCEDURE_NAME">DoBasso</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><block type="music_procedure_define" id="J4b2tFJ1tq}7kDaf-:uj" editable="false" x="228" y="50"><field name="PROCEDURE_NAME">DoBasso</field><statement name="DO"><block type="change_tone" id="1Mtv:Dey3w9vZ7^ShZ/W" editable="false"><field name="TONE">3</field><next><block type="play_note" id="uu$tc`75YK@pi8i,oAZq" editable="false"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="change_tone" id="2w5Pj)gW,HZZg`2L,,8B" editable="false"><field name="TONE">4</field></block></next></block></next></block></statement></block></xml>',
    defaultCode: '<xml xmlns="https://developers.google.com/blockly/xml"><block type="music_start" id="q#`1xYq8!]P/$riW((!0" deletable="false" movable="false" x="10" y="10"></block><block type="music_procedure_call" id="VKd]]aN.5[3)sH!iaHuQ" x="234" y="34" editable="false"><field name="PROCEDURE_NAME">DoBasso</field></block><block type="music_procedure_call" id="SrDfHXdW.pOjff[ylqqV" x="239" y="109" editable="false"><field name="PROCEDURE_NAME">DoBasso</field></block><block type="music_procedure_call" id="h/mGRtd)Q5b$lj06`9dR" x="236" y="180" editable="false"><field name="PROCEDURE_NAME">DoBasso</field></block><block type="music_procedure_call" id="bFO+#Q^9v7W).3To]}nn" x="234" y="257" editable="false"><field name="PROCEDURE_NAME">DoBasso</field></block><block type="music_procedure_define" id="J4b2tFJ1tq}7kDaf-:uj" x="11" y="341" editable="false"><field name="PROCEDURE_NAME">DoBasso</field><statement name="DO"><block type="change_tone" id="1Mtv:Dey3w9vZ7^ShZ/W" editable="false"><field name="TONE">3</field><next><block type="play_note" id="uu$tc`75YK@pi8i,oAZq" editable="false"><field name="NOTE">C</field><field name="DURATION">2</field><next><block type="change_tone" id="2w5Pj)gW,HZZg`2L,,8B" editable="false"><field name="TONE">4</field></block></next></block></next></block></statement></block></xml>'
  }
]

module.exports  = processMusicExercises(exercisesMusic)
