import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity ( "widgets" )
export class WidgetEntity {

    @PrimaryGeneratedColumn ()
    id: number;

    @Column ()
    name: string;

    @Column ()
    type: string; // Should be WidgetType

    @Column ()
    x: number;

    @Column ()
    y: number;

    @Column ()
    z: number;

    @Column ()
    width: number;

    @Column ()
    height: number;

    @Column ()
    selected: boolean;

    @Column ()
    start: number;

    @Column ()
    end: number;

    @Column ()
    visible: boolean;

    @Column ()
    locked: boolean;
}