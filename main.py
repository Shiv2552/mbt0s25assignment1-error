S2 = 0

def on_forever():
    global S2
    S2 = pins.digital_read_pin(DigitalPin.P5)
    basic.show_number(S2)
basic.forever(on_forever)
